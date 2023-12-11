import React, {useState, useEffect} from 'react';
import {View,ImageBackground,Image, StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import MyProfile from '../Task5/MyProfile';

const Splash= props => {

  useEffect(()=>{
    setTimeout(() => {
      props.navigation.navigate('MyProfile')
    }, 3000);
  },[])
  
  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.bg}
      >
      <Image
        source={require('../../assets/pic.jpg')}
        style={styles.logo}
      />

      <Text style={styles.headingText}>My Profile</Text>
   
      </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    width: wp(40),
    height: hp(20),
    alignSelf: 'center',
    borderRadius: 200/2,
    marginBottom: 20
},
  bg: {
      backgroundColor: '#fff',
      width: wp('250%'),
      height: hp(100),
      justifyContent: 'center'
  },
  headingText: {
   fontSize: 30,
   fontWeight: 'bold',
   textAlign: 'center',
   color: 'black' 
  }
});

export default Splash;