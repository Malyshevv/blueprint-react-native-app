import { View, Text } from "react-native";
import { styles } from "./Style";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";

export function Content({children}:any) {
    return (

        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header/>
            {children}
            <Footer/>
        </View>
    );
}
