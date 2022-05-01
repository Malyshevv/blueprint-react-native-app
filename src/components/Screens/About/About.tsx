import React, {useEffect, useRef, useState} from 'react';
import {View, Button, Text} from "react-native";

import {styles} from "./Style";

export function About({navigation}:any) {

    return (
        <View>
            <Text>About</Text>

            <Button
                onPress={() => navigation.goBack()}
                title="Go to Home"
            />
        </View>
    );
}
