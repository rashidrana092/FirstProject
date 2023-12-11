import { View,Text, } from 'react-native';
import React,{useEffect,useState} from 'react';
import { ListItem } from 'react-native-elements';

const ApiJsonServer =()=>{

const [data,setData]=useState([]);
const getAPIData = async () =>{
const url="http://192.168.1.181:3000/users";
let result= await fetch(url);
result=await result.json();
setData(result)
}
useEffect(()=>{
    getAPIData()
},[])
    return(
        <View>
            <Text style={{fontSize: 20}}>Call JSON Server API</Text>
            {
                data.length?
                data.map((item)=>
            <View style={{borderWidth: 1,borderColor: 'red'}}>
            <Text style={{fontSize: 14}}>{item.name}</Text>
            <Text style={{fontSize: 14}}>{item.age}</Text>
            <Text style={{fontSize: 14}}>{item.email}</Text>
                    
            </View>)
            :null
            }
        </View>
    );
}
export default ApiJsonServer;