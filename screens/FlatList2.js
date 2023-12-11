import {Text, View,StyleSheet ,FlatList,Button,StatusBar} from 'react-native';
import React,{useState} from 'react';


export default function App() {

  var users=[
    {
      id: 1,
      name: "FAREED"
    },
    {
      id: 2,
      name: "MUBARAK"
    },
       {
      id: 3,
      name: "RIZWAN"
    },
       {
      id: 4,
      name: "rashid"
    },
    
  ]
 
    return (
    <View style={{paddingTop: StatusBar.currentHeight}}> 
      <FlatList
        data={users}
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
        keyExtractor= {item=>item.id}
         />

    </View>
  );
}

const styles=StyleSheet.create({

  item: {
    fontSize: 30,
    padding: 20,
    fontWeight: 'bold',
    color: 'coral',
    backgroundColor: 'darkred',
    borderWidth: 1,
    margin: 10

  }
 
});