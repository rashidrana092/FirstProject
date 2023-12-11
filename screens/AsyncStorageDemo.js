import React from 'react';
import { View,Text,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AsyncStorageDemo=()=>{
    const setData=async()=>{
       await AsyncStorage.setItem("user","Fareed")
    }

    const getData=async()=>{
      const name= await AsyncStorage.getItem("user");
      console.warn(name);
    }

    const removeData=async()=>{
      await AsyncStorage.removeItem("user");
    
    }
    
    return(
    <View style={{marginTop: 100,marginLeft: 30}}>
        <Text style={{fontSize: 40}}>Async Storage Demo</Text>

        <Button title='Set Data' onPress={setData}/>
        <Button title='Get Data' onPress={getData}/>
        <Button title='Remove Data' onPress={removeData}/>
        
    </View>

    );
}

export default AsyncStorageDemo;