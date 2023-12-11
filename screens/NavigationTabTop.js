import React,{useState} from 'react';
import { Text,Button,View,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//const Tab=createBottomTabNavigator();

const TabNavigationTop=() =>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login}/> 
                <Tab.Screen name='Signup' component={Signup}/> 
                

            </Tab.Navigator>
        </NavigationContainer>
    
    );
}
export default TabNavigationTop;

const Signup =()=>{

    return(
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize: 30,fontWeight: 'bold'}}>Signup</Text>
        </View>
    );
}

const Login =()=>{

    return( 
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize: 30,fontWeight: 'bold'}}>Login Screen</Text>
        </View>
    );
}
