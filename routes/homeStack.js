import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetail';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home"
              component={Home}
              options={{
                title: 'GAME ZONE Page',
                headerStyle: {
                  backgroundColor: '#052555',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }} />
            <Stack.Screen 
              name="ReviewDetails"
              component={ReviewDetails}
              options={{
                title: 'Review Details Page',
                headerStyle: {
                  backgroundColor: '#052555',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
