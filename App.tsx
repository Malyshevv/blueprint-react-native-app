import 'react-native-gesture-handler'

import React,{useState, useEffect} from "react";
import {Provider, useSelector} from 'react-redux';
import { store } from './src/utils/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from "./src/components/Navigator/DrawerNavigation";

export default function App() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    return (
        <Provider store={store}>
            {mounted && (
                <NavigationContainer>
                    <DrawerNavigation/>
                </NavigationContainer>
            )}
        </Provider>
    );
}
