import { View, Text,Button,Alert } from 'react-native'
import React from 'react';
import Test2 from './Test2';
import {Icon} from 'react-native-elements';

const Test1 = ({navigation}) => {

  return (
    <View>
      <Text style={{fontSize: 40}}>test1</Text>

      <Icon name="home" type="material-community"
        size={50} 
    style={{marginLeft: 10,marginTop: 5}}
    />
  
      <Button title='Go to Test2' 
onPress={()=>  navigation.navigate('Screen2')}


      />
    </View>
  )
}

export default Test1