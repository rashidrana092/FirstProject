import {Text,View} from 'react-native';
import React,{useState,useEffect} from 'react';
  
const SplashScreen=(props)=>
{

  useEffect(()=>{
    setTimeout(() => {
  
      props.navigation.navigate('Login')
      
       //setShowSplashScreen(false);
    }, 3000);
  },[])
  
  return (


    <View style={{flex:1,alignContent: 'center', alignItems: 'center',backgroundColor: 'midnightblue',justifyContent: 'center'}}>

    <Text style={{fontSize: 40,fontWeight: 'bold',textAlign: 'center',
  color:'white'}}>This is Splash Screen</Text>

    </View>
  
  
  
  
  
  );
}

export default SplashScreen;