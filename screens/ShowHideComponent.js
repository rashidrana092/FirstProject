import { Text, View,Button } from 'react-native';
import React,{useState,useEffect} from 'react';


const App=()=> {
  
  const [show,setShow]=useState(true)

  return (
    <View>
        <Text style={{fontSize: 30}}>Show/Hide Component </Text>
        <Button title="Show Component" onPress={()=>setShow(true)} />

        <Button title="Hide Component" onPress={()=>setShow(false)} />

      <Button title="Toggle Component"   onPress={()=>setShow(!show)} />
  

        {
          show == true ? <User /> : null
          // shor form of above line
          // show? <User /> : null
        }




  </View>
  );
  }

const User=()=> {
  

  return (
    <View>
        <Text style={{fontSize: 30,color: 'red'}}>User Component </Text>
        

  </View>
  );
  }





export default App;