import { Text, View,Button } from 'react-native';
import React,{useState,useEffect} from 'react';

//in this program, we are using useEffect as componentDidUpdate like in class component.
// if we want to update specific state data then state name will be given in [] in useEffect.

const App=()=> {
  const   [count,setCount]=useState(0);

  const[data,setData]=useState(100);

useEffect(()=>{
  console.warn("do some animation");
},[count])


// if we want to update more than one component then like this [count,data,etc...]


// if we want to do different task on updattion of different compoentn then we can use seperate useEffect for each component like this
useEffect(()=>{
  console.warn("call some API here");
},[data])

  return (
    <View >
      <Text style={{
        fontSize: 30
      }}>
        useEffect as componentDidUpdate: {count}
      </Text>
      
      <Button title="Update Count" onPress={()=>setCount(count+1)} />

<Button title="Update Data" onPress={()=>setData (data+1)} />


<User info={{data,count}}/>
    </View>
  );
}


// to use useEffect in props
const User=(props)=>{

  useEffect(()=>{
    console.warn("run this code when data prop is updated ")

  },[props.info.data])

useEffect(()=>{
    console.warn("run this code when count prop is updated ")

  },[props.info.count])
  return(
    <View>
        <Text style={{fontSize: 30,color: 'red'}}>
        data: {props.info.data}
      </Text>
          <Text style={{fontSize: 30,color: 'red'}}>
        data: {props.info.count}
      </Text>
    </View>
  );
}



export default App;