import {Ionicons} from "@expo/vector-icons";
import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer";
import {AboutStackNavigator, ContactStackNavigator} from "./MainStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator  = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} options={{headerShown: false}} />
            <Drawer.Screen name="About" component={AboutStackNavigator} options={{headerShown: false}} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator ;
