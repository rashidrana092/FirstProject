import { View,Text, } from 'react-native';
import React,{useEffect,useState} from 'react';
import { ListItem } from 'react-native-elements';

const ApiPostCall =()=>{

const saveAPIData = async () =>{

const data ={
    name: 'rashid',
    age: 5,
    email: 'rashid@gmail.com'
}

const url="http://192.168.1.181:3000/users";
let result= await fetch(url,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
})
result=result.json();
console.warn(result);
};

    return(
        <View>
            <Text style={{fontSize: 20}}>POST API Call</Text>
        <Button title="Save Data"
        onPress={saveAPIData}></Button>

        </View>
    );
}
export default ApiPostCall;