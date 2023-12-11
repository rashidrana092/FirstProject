import React,{useState} from "react";
import {Button, Text,View} from 'react-native';

const PropsDemo =()=>{
    const [name,setName]=useState("FMR")


    return(
        <View>
            <Button title='Update props' onPress={()=>SVGAnimateTransformElement("Fareed")} />    

            <User name={name} age={20} />

        </View>
    );
}

const User=(props)=>{
    return(
        <View>
            <Text style={{fontSize: 30}}>Name: {props.name}</Text>
            <Text style={{fontSize: 30}}>Age: {props.age}</Text>
            
        </View>
    );
}

export default PropsDemo;