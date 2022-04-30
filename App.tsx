import 'react-native-gesture-handler'

import React,{useState, useEffect} from "react";
import {Provider, useSelector} from 'react-redux';
import { store } from './src/utils/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/components/Navigator/BottomTabNavigator";
import DrawerNavigation from "./src/components/Navigator/DrawerNavigation";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <DrawerNavigation/>
            </NavigationContainer>
        </Provider>
    );
}
