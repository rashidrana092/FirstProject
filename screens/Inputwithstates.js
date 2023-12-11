import React,{useState} from 'react';
import {View,Text,Button,TextInput,Alert} from 'react-native';

const App=()=>{

const [name,setName]=useState('Fareed');
const [age,setAge]=useState('30');

function show(){
Alert.alert('Information',"Name:" + name+"\nAge: "+age);


}

  return(
      <View style={{padding: 50,justifyContent: 'center',alignItems: 'center'}}>

            <Text style={{fontSize: 20}}>Enter Name: </Text>
            <TextInput style={{margin: 5,borderWidth: 1,borderColor: 'black',width: 200}}
            placeholder="e.g Fareed" onChangeText={(val)=>setName(val)}></TextInput>

            <Text style={{fontSize: 20}}>Enter Name: </Text>
            <TextInput style={{margin: 5,borderWidth: 1,borderColor: 'black',width: 200}}
            placeholder="e.g 99" onChangeText={(val)=>setAge(val)}></TextInput>


           <Text style={{fontSize: 15,margin: 10}}>Your Name is: {name}, Age is: {age} </Text>

           <Button title="Click Me" onPress={show}/>
            
            
      </View>

  );
}

export default App;
