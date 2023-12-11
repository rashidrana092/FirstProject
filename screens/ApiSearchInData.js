import React,{useState} from 'react';
import { View,Text,TextInput } from 'react-native';

const ApiSearchInData=()=>{
    
    const [data,setData]=useState([]);
    const searchUser=async (text)=>{
    const url=`http://192.168.236.74:3000/users?q=${text}`;
    //console.warn(url);
    let result=await fetch(url);   
    result=await result.json();
    if(result){
        setData(result);
    }

    }
    
    
    return(
        <View style={{flex: 1}}>
            <Text style={{fontSize: 30,fontWeight: 'bold',
        textAlign: 'center',marginTop: 20,color: 'black'}}>Search With API</Text>

        <TextInput
        placeholder={'Search'}
        style={{borderColor: "skyblue",
        borderWidth: 1,
        margin: 15,fontSize: 20
        }}
        onChangeText={(text)=>searchUser(text)} 
        />
        {
            data.length?
            data.map((item)=>
            <View
            style={{
                padding: 10,flexDirection: 'row',justifyContent: 'space-between'

            }}
            >
                <Text
                style={{fontSize: 20}}
                >{item.name}</Text>
                <Text
                style={{fontSize: 20}}
                >{item.age}</Text>
                <Text
                style={{fontSize: 20}}
                >{item.email}</Text>

            </View>
            )
            :null
        }
        </View>
    );

}
export default ApiSearchInData;