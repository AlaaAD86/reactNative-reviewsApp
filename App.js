import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'poppins-bold': require('./assets/fonts/poppins-Bold.ttf'),
  'poppins-light': require('./assets/fonts/poppins-Light.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onError={console.warn}
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}
