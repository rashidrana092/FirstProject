import {Text, View,StyleSheet ,FlatList,Button,StatusBar,ScrollView} from 'react-native';
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
     {
      id: 5,
      name: "rashid"
    },
     {
      id: 6,
      name: "rashid"
    },
     {
      id: 7,
      name: "rashid"
    },
     {
      id: 8,
      name: "rashid"
    },
     {
      id: 9,
      name: "rashid"
    },
     {
      id: 10,
      name: "rashid"
    },


  ]
 
    return (
    <View style={{paddingTop: StatusBar.currentHeight}}> 
     <ScrollView style={{marginBottom: 50}}>
     {
       users.map((item)=><Text style={styles.item}>{item.name} </Text>)
     }
          </ScrollView>

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