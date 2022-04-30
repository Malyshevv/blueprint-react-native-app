import { Text, Button, View } from 'react-native';
import React,{useState, useEffect} from "react";
import {Provider, useSelector} from 'react-redux';
import { store } from './src/utils/redux/store';


import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/components/Navigator/BottomTabNavigator";
import DrawerNavigation from "./src/components/Navigator/DrawerNavigation";
import {useStateIfMounted} from "use-state-if-mounted";


export default function App() {
    const [isMounted, setIsMounted] = useStateIfMounted(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    return (
        <Provider store={store}>
            {isMounted && (
                <NavigationContainer>
                    <BottomTabNavigator/>
                </NavigationContainer>
            )}
        </Provider>
    );
}
