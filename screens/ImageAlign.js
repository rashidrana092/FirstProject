import {Text, View,Image } from 'react-native';


export default function ImageAlign() {
  return (
    <View>

    <View 
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
     // backgroundColor: 'green'
    }}>
         <Image source={require('../assets/pic.jpg')}
           style={{width: 200, height: 200,borderRadius: 200}}/>
    </View>

<View 
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
     // backgroundColor: 'red'

    }}>
        <Text
           style={{width: 100, height: 50,fontSize:30,fontWeight: 'bold'}} >
           Fareed 
      </Text>

    </View>
    
    
    </View>
  );
}
