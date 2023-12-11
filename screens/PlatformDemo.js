import { View,Text,Button,Platform ,StyleSheet} from 'react-native';
import React,{useState} from 'react';

const PlatformDemo =()=>{

    return(
        

        <View>
                <Text style={{fontSize: 30}}>
                    Platform: {Platform.OS}
                </Text>
                {
                Platform.OS=="android"?
                <View style={{backgroundColor: 'darkred',width: 100,height: 100}}></View>
                :
                <View style={{backgroundColor: 'midnightblue',width: 100,height: 100}}></View>
                
                }

<Text style={styles.text}>
                    Fareed
                </Text>
                <Text style={{fontSize: 20}}>my RN verion: {JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>               
         
              {/* JSON.stringify() Convert a JavaScript object into a string */}
        <Text style={{fontSize: 20}}>{JSON.stringify(Platform)}</Text>               
         </View>
    );
}

export default PlatformDemo;

const styles=StyleSheet.create({
    text: {
        color: Platform.OS=="android"?"coral": 'green',
        fontSize: 30
    }

})