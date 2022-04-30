import React, {useEffect, useRef, useState} from 'react';
import {View, Button, Text, Image} from "react-native";
import {styles} from "./Style";

import axios from "axios";

export function Details({route, navigation}:any) {

    const { itemId, title } = route.params;
    const [load, setLoad] = useState(true)
    const [postData, setPostData] = useState<any>()

    useEffect(() => {
        navigation.setOptions({
            title: title,
        });
        if(load) {
            axios.get('https://reqres.in/api/users/'+itemId, )
                .then(function (response) {
                    console.log(response.data)
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
