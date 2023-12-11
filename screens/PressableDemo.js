import { View,Text,Button,Pressable ,StyleSheet} from 'react-native';
import React,{useState} from 'react';

const PressableDemo =()=>{
    const [showModel,setShowModel]=useState(false)

    return(
        
        // {/* pressable are used when we want more events on button like long press*/}

        <View style={styles.main}>
            <Pressable
           // onPress={()=>console.warn("normal onPress event occured")}
            //onLongPress={()=>console.warn("longPress event occured")}
            //when pressed or enter in control event
            onPressIn={()=>console.warn("pressIn event occured")}

            // when releasing press or leave event 
            onPressOut={()=>console.warn("pressOut event occured")}
           
            >
                <Text style={styles.pressableBtn}>Fareed</Text>
            </Pressable>    

         </View>
    );
}

export default PressableDemo;

const styles=StyleSheet.create({

     main:
     {
        flex: 1,
        justifyContent: 'center'
     },
     pressableBtn:
     {
        backgroundColor: 'midnightblue',
        color: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        shadowColor: '#000',
        elevation: 5
     }
})