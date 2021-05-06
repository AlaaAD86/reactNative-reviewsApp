import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation, route }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    const { title, temp, body} = route.params; // we need to pass route as props
    
    return (
        <View style={globalStyles.container}>
            <Button title='Go back to Home Page' onPress={pressHandler}/>
            <Text>{ title }</Text>
            <Text>{ temp }</Text>
            <Text>{ body }</Text>
        </View>
    );
}
