import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';

const App=()=>{

let [name,setName]=useState('Fareed'); // Fareed is default value

function updateName(){
  setName('FMR')
}

  return(
      <View style={{margin: 50}}>
            <Text style={{fontSize: 20,margin: 10}}>Friend Name: {name}</Text>
            <Button title="Click Me" onPress={updateName}/>
      </View>

  );
}

export default App;
