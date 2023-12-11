import React from 'react';
import {Text, View} from 'react-native';

const Child = props =>{
    return(
        <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Name: {props.name}</Text>
    </View>
    );
    
};

const Props2 = () =>{
return(
    <View style={{alignItems: 'center'}}>
        <Child name='Fareed' />
    
</View>


);

};

export default Props2;