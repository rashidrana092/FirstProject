import { View,Text,Button,StyleSheet } from 'react-native';
import React,{useState,useEffect} from 'react';
//useEffect is a hook which is used when we want to change something in app


 // APi used to send or recieve data from server to app
 // it connect App to database   
//To enable the mobile app to access the data, the app must make an API request to the back-end application. The request will include information such as the restaurant's location, the menu items, and the desired order.

// APi has 4 type of methods
//1) GET
//2) POST
//3) PUT
//4) Patch
//5) DELETE

const Api1 =()=>{

const [data,setData]=useState(undefined)

const getAPIData=async ()=>{
    // api call
    // async means load data when need so app dont slow
    // await will be used with async

    const url="https://jsonplaceholder.typicode.com/posts/1";
let result = await fetch(url);
result=await result.json();
setData(result)
//console.warn(result);
}

useEffect(()=>{
getAPIData();
},[])

    return(
        <View>
            <Text style={{fontSize: 30}}>API Calling</Text>
        {
            data ?
            <View>
            <Text style={{fontSize: 30}}>{data.id}</Text>
            <Text style={{fontSize: 30}}>{data.userId}</Text>
            <Text style={{fontSize: 30}}>{data.title}</Text>
            <Text style={{fontSize: 30}}>{data.body}</Text>
            

     </View>
     :null
    }
     </View>
  
    );
};


export default Api1;