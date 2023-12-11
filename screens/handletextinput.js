import {Text, View,Image,StyleSheet ,TextInput,Button} from 'react-native';
import React,{useState} from 'react';


export default function App() {

  const [name,setName]=useState("");
  return (
    <View style={{justifyContent: 'center'}}>
  <Text style={styles.heading}>Handle Text Input</Text>
  <TextInput
    style={styles.inputBox}
    placeholder='enter your name'
    onChangeText={(text)=>setName(text)}
    value={name}
  />
 <Text style={{fontSize: 20,paddingHorizontal: 20,paddingVertical: 20}}>Name: {name}</Text>

 <Button style={{marginTop: 20,paddingTop: 20}}
          title='Clear' onPress={()=>setName('')}/>

    </View>
  );
}

const styles=StyleSheet.create({

  heading: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  inputBox: {
borderWidth: 1,
borderColor: 'grey',
margin: 20,
borderRadius :10,
fontSize: 20,
height: 30,
paddingHorizontal: 10
  }
})