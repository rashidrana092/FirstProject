import { View,Text,Modal,Button,StyleSheet } from 'react-native';
import React,{useState} from 'react';

const ModalCustom =()=>{

    const [show,setShow]=useState(false)

    return(
        <View style={styles.container}>
        {
             show ?
             <View style={styles.modal}>       
            <View style={styles.body}>
            <Text style={{fontSize: 30}}>Fareed</Text>
                <Button title='Close Dialog'
                    onPress={()=>setShow(false)}
                    />
            </View>
            </View>
            
        : null
        }
          <Button title='Open Dialog'
          onPress={()=>setShow(true)}
            />
     </View>
  
    );
};

const styles=StyleSheet.create({

     container:
     {
        flex: 1,
        justifyContent: 'flex-end'
     },
     modal:{
        flex: 1,
        justifyContent: 'center',
        // rgba means red green blue aplha, alpha means opacity
        backgroundColor: 'rgba(50,50,50,.5)', 
        alignItems: 'center'

     },
     body:{
            backgroundColor: '#fff',
            height: 300,
            width: 300,
            padding: 20,
            borderRadius: 20,
            justifyContent: 'flex-end',
            borderRadius: 10,

     },
     
})
export default ModalCustom;