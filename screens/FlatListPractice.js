import React, { Component } from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';

const FlatListPractice =() =>
{
    const users=[
        
        {
            id: 1,
            name: 'FAREED'
        },

        {
            id: 2,
            name: 'MUBARAK'
        },

        {
            id: 3,
            name: 'RIZWAN'
        },

        {
            id: 4,
            name: 'rashid'
        },
    ]
        return(
            <View style={{padding: 10}}>
                <Text style={{fontSize: 20}}>FlatList Example</Text>
                <FlatList
                data={users}
                renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
                keyExtractor={item=>item.id}  // use in scrolling

                />

               
            </View>

        );
};

const styles=StyleSheet.create({
    item: {
        fontSize: 24,
        padding: 10,
        color: '#fff',
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    }
})
export default FlatListPractice;

