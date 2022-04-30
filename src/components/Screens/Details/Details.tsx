import React, {useEffect, useRef, useState} from 'react';
import {View, Button, Text, Image, TouchableOpacity} from "react-native";
import {styles} from "./Style";

import axios from "axios";
import {Ionicons} from "@expo/vector-icons";

export function Details({route, navigation}:any) {

    const { itemId, title } = route.params;
    const [load, setLoad] = useState(true)
    const [postData, setPostData] = useState<any>()

    useEffect(() => {
        if(load) {
            axios.get('https://reqres.in/api/users/'+itemId, )
                .then(function (response) {
                    setLoad(false)
                    if (response.data.data) {
                        setPostData(response.data.data)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, [load]);

    useEffect(() => {
        const headerRight = <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={20}/></TouchableOpacity>
        navigation.setOptions({
            headerLeft: () => headerRight,
            headerTitle: title
        });
    }, [postData]);


    return (
        <View style={{ margin: 10}}>
            {load && (
                <Text>Загрузка...</Text>
            )}
            {!load && postData && (
                <View>
                    <Image
                        style={{width: 50,height: 50}}
                        source={{uri: postData.avatar}}
                    />
                    <Text style={styles.title}>{postData.first_name} {postData.last_name}</Text>
                    <Text style={styles.description}>{postData.email}</Text>
                </View>

            )}
        </View>
    );
}
