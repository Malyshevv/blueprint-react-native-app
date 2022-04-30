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
    headerTintColor: "black",
    headerBackTitle: "Back",
    headerRight: () => headerRight
};


const headerTitle = (title:string) => { return  <Text style={{alignItems: 'center'}}>{title}</Text> }
const headerRight = <TouchableOpacity onPress={() => alert('Правая кнопка!')}><Ionicons name="shapes" size={20}/></TouchableOpacity>
const headerLeft = (navigation:any) => { return <TouchableOpacity onPress={() => navigation.openDrawer()}><Ionicons name="menu" size={20}/></TouchableOpacity>}
/*
* Drawer function
navigation.openDrawer();
navigation.closeDrawer();
navigation.toggleDrawer();
* */


const MainStack = createNativeStackNavigator();

const MainStackNavigator = ({navigation}:any) => {
    return (
        <MainStack.Navigator screenOptions={
            {
                ...screenOptionStyle,
                headerTitleAlign: 'center',
                headerLeft: () => headerLeft(navigation),
                headerTitle: () => headerTitle('Home')
            }
        }>
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Details" component={Details} />
        </MainStack.Navigator>
    );
}

const ContactStackNavigator = ({navigation}:any) => {
    return (
        <MainStack.Navigator screenOptions={
            {
                ...screenOptionStyle,
                headerTitleAlign: 'center',
                headerLeft: () => headerLeft(navigation),
                headerTitle: () => headerTitle('Contact')
            }
        }>
            <MainStack.Screen name="Contact" component={Contact} />
        </MainStack.Navigator>
    );
}

const AboutStackNavigator = ({navigation}:any) => {
    return (
        <MainStack.Navigator screenOptions={
            {
                ...screenOptionStyle,
                headerTitleAlign: 'center',
                headerLeft: () => headerLeft(navigation),
                headerTitle: () => headerTitle('About')
            }
        }>
            <MainStack.Screen name="About" component={About} />
        </MainStack.Navigator>
    );
}


export { MainStackNavigator, ContactStackNavigator, AboutStackNavigator };
