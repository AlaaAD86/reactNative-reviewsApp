import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {

    const [reviews, setReviews] = useState([
        {title: 'Tokyo', temp: 22, body: 'raining', key: '1'},
        {title: 'Helsinki', temp: 24, body: 'snowy', key: '2'},
        {title: 'Buenos Aires', temp: 33, body: 'sunny', key: '3'},
        {title: 'Athena', temp: 29, body: 'sunny', key: '4'},
    ])
   
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    }

    
    return (
      <View style={globalStyles.container}>
        <Button title='Go to reviews' onPress={pressHandler}/>
        <FlatList
            data={reviews}
            renderItem={({item})=> ( // we will pass the item (represents the list above on every iteration) in the navigate function as un object{}
              <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </TouchableOpacity>
            )}
        
        />
      </View>
    );
  }
