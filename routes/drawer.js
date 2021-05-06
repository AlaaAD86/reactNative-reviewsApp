import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import About from '../screens/about';

// import Home from '../routes/homeStack';

const Drawer = createDrawerNavigator();

export default function DrawerApp({navigation}) {
    return (
        <NavigationContainer >
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}