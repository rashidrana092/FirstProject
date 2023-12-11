import { View,Text,Button,StyleSheet,ScrollView,FlatList } from 'react-native';
import React,{useState,useEffect} from 'react';

const APIWithList =()=>{

const [data,setData]=useState([]);

const getAPIData=async ()=>{
    // api call
    // async means load data when need so app dont slow
    // await will be used with async

const url="https://jsonplaceholder.typicode.com/posts";
let result = await fetch(url);
result= await result.json();
setData(result);
//console.warn(result);
}

useEffect(()=>{
getAPIData();
},[]);

    return(
        <ScrollView>
            <Text style={{fontSize: 30}}>List with API Calling</Text>
        {
            data.length ?
            <FlatList
            data={data}
            renderItem={({item})=>
             <View style={{padding: 10,borderBottomColor: 'orange',borderBottomWidth: 10}}>
                <Text style={{fontSize: 20,backgroundColor: '#ddd'}}>Id: {item.id}</Text>
                <Text style={{fontSize: 20}}>Title: {item.title}</Text>
                <Text style={{fontSize: 20}}>Body: {item.body}</Text>
            
                </View>}
            />
        
     :null
    }
     </ScrollView>
  
    );
};


export default APIWithList;