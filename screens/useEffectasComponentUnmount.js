import { Text, View,Button } from 'react-native';
import React,{useState,useEffect} from 'react';


const App=()=> {
  
  const [show,setShow]=useState(true)

  return (
    <View>
        <Text style={{fontSize: 30}}>useEffect for Unmount Component </Text>


      <Button title="Toggle Component"   onPress={()=>setShow(!show)} />
  

        {
          show == true ? <User /> : null

        }




  </View>
  );
  }

const User=()=> {
  let timer=setInterval(()=>{
    console.warn("timer called");
  },2000)


  useEffect(()=>{
      return()=>clearInterval(timer)}
  )

  return (
    <View>
        <Text style={{fontSize: 30,color: 'red'}}>User Component </Text>
        

  </View>
  );
  }





export default App;