import { View,Text,Button} from 'react-native';
import React, {useState} from 'react';

const StatesDemo =() => {

    const [name,setName]=useState('Fareed');
    const [person,setPerson]=useState({name: 'FMR',age: 50});

    const clickHandler=()=>{
        setName('Baba Fareed');
        setPerson({name: 'FMRr',age: 10});
    }
    return(
        <View style={{justifyContent: 'center',alignItems: 'center',flex: 1}}>
                <Text style={{padding: 10}}>My Name is {name}</Text>
                <Text style={{padding: 10}}>Friend Name is {person.name} and age is {person.age}</Text>
                
                
                <Button title='Update Data' onPress={clickHandler}/>

            
        </View>


    );

}

export default StatesDemo;