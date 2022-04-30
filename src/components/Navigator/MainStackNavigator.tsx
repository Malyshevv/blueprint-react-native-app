import {TouchableOpacity, Text, Button} from "react-native";
import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Ionicons} from "@expo/vector-icons";

import {Home} from "../Screens/Home";
import {Details} from "../Screens/Details";
import {About} from "../Screens/About";
import {Contact} from "../Screens/Contact";

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#ffffff",
    },
    headerTitleAlign: 'center',
    headerTintColor: "black",
    headerBackTitle: "Back",
    //headerLeft: () => headerLeft,
    headerRight: () => headerRight
};

const headerLeft = <TouchableOpacity onPress={() => alert('Левая кнопка!')}><Ionicons name="navigate" size={20}/></TouchableOpacity>
const headerRight = <TouchableOpacity onPress={() => alert('Правая кнопка!')}><Ionicons name="shapes" size={20}/></TouchableOpacity>
const headerTitle = (title:string) => { return  <Text style={{alignItems: 'center'}}>{title}</Text> }

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={
            {
                ...screenOptionStyle,
                headerTitle: () => headerTitle('Home')
            }
        }>
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Details" component={Details} />
        </MainStack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={
            {
                ...screenOptionStyle,
                headerTitle: () => headerTitle('Contact')
            }
        }>
            <MainStack.Screen name="Contact" component={Contact} />
        </MainStack.Navigator>
    );
}

const AboutStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={
            {
                ...screenOptionStyle,
                headerTitle: () => headerTitle('About')
            }
        }>
            <MainStack.Screen name="About" component={About} />
        </MainStack.Navigator>
    );
}


export { MainStackNavigator, ContactStackNavigator, AboutStackNavigator };
