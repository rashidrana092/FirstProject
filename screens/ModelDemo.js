import { View,Text,Button,Modal ,StyleSheet} from 'react-native';
import React,{useState} from 'react';

const ModelDemo =()=>{
    const [showModel,setShowModel]=useState(false)

    return(
        <View style={styles.main}>
        <Modal
        transparent={true}
        visible={showModel}
        animationType='slide'
        > 
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modelText}>Fareed</Text>
                    <Button title='Close Model'
                    onPress={()=>setShowModel(false)}
                    />
   
                </View>
            </View>
        </Modal>
       <View style={styles.buttonView}>
          <Button title='Open Model'
          onPress={()=>setShowModel(true)}
          />
          </View>
        </View>
    );
}

export default ModelDemo;

const styles=StyleSheet.create({

     main:
     {
        flex: 1
     },
     buttonView:{
        flex: 1,
        justifyContent: 'flex-end'
     },
     centeredView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
     },
     modalView:{
            backgroundColor: '#fff',
            padding: 30,
            borderRadius: 20,
            shadowColor: 'black',
            elevation: 5,

     },
     modelText:{
        fontSize: 30,
        marginBottom: 20
     }
})