import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/about';

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="About"
              component={About}
              options={{
                title: 'About GAME ZONE',
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
