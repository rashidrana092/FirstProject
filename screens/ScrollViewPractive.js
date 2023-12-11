import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image
} from 'react-native';

const ScrollViewPractive = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
         {/* <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>*/} 

        <Image source={require('../assets/pic.jpg')} style={{width: 200,height: 200, alignSelf: 'center'}} />
        
        
        <Image source={require('../assets/pic.jpg')} style={{width: 200,height: 200, alignSelf: 'center'}} />
        
        
        <Image source={require('../assets/pic.jpg')} style={{width: 200,height: 200, alignSelf: 'center'}} />
        
        
        <Image source={require('../assets/pic.jpg')} style={{width: 200,height: 200, alignSelf: 'center'}} />
        
        
        <Image source={require('../assets/pic.jpg')} style={{width: 200,height: 200, alignSelf: 'center'}} />
        
        
        <Image source={require('../assets/pic.jpg')} style={{width: 200,height: 200, alignSelf: 'center'}} />
        

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
   backgroundColor: 'pink'
  },
  text: {
    fontSize: 42,
  },
});

export default ScrollViewPractive;