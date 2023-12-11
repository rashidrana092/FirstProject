import {Text,View} from 'react-native';
import React from 'react';

let name="Fareed";

function fruit(){
    return "Apple";
}

const JsxDemo=()=>{

const age=40;
var email="abc@email.com";
    
    return(
        <View>
            <Text style={{fontSize: 20}}>{name}</Text>
            <Text style={{fontSize: 20}}>{age}</Text>
            <Text style={{fontSize: 20}}>{email}</Text>
            <Text style={{fontSize: 20}}>{50+30}</Text>
            <Text style={{fontSize: 20}}>{(age==30)? "above 30": "unkonwn age"}</Text>
            <Text style={{fontSize: 20}}>{fruit()}</Text>
      
            
        </View>
    );
};

export default JsxDemo;