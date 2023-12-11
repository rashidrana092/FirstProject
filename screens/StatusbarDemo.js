import { View,Text,Button,StatusBar ,StyleSheet} from 'react-native';
import React,{useState} from 'react';

const StatusbarDemo =()=>{

    const [hide,setHide]=useState(false)
    const [barStyle,setBarStyle]=useState("default")
  
    return(
        

        <View style={styles.main}>
                <StatusBar
                backgroundColor='darkred'
                barStyle={barStyle}
                hidden={hide}
                />

              <Button title='Toggle Status Bar'
              onPress={()=>setHide(!hide)} />
              <Button title='Update Stule'
              onPress={()=>setBarStyle("dark-content")}
              />
                
         </View>
    );
}

export default StatusbarDemo;

const styles=StyleSheet.create({

     main:
     {
        flex: 1,
        justifyContent: 'center'
     },
     
})