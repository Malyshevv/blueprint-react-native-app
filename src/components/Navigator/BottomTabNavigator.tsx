import React from "react"
import { Text, Button, View } from 'react-native';
import {Ionicons} from "@expo/vector-icons";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AboutStackNavigator, ContactStackNavigator, MainStackNavigator} from "./MainStackNavigator";

const Tab = createBottomTabNavigator();

const headerShow = false;
const homeIcon = <Ionicons name="home" size={20} color={'black'}/>
const contactIcon = <Ionicons name="mail" size={20} color={'black'}/>
const aboutIcon = <Ionicons name="book" size={20} color={'black'}/>

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={MainStackNavigator} options={
                {
                    headerShown: headerShow,
                    tabBarIcon: () => homeIcon,
                }
            } />
            <Tab.Screen name="ContactTab" component={ContactStackNavigator} options={
                {
                    headerShown: headerShow,
                    tabBarIcon: () => contactIcon,
                }
            } />
            <Tab.Screen name="AboutTab" component={AboutStackNavigator} options={
                {
                    headerShown: headerShow,
                    tabBarIcon: () => aboutIcon,
                }
            } />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
