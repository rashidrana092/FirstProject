import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
'react';
import React,{useState} from 'react';

const App=()=> {
  
const[selectedRadio,setSelectedRadio]=useState(1) // 1 means 1st radio nbutton 2 means second radio button

  return (
    <View style={styles.main}>
    <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
      <View style={styles.radioWrapper}>
        <View style={styles.radio}>
        {
          selectedRadio===1 ?  <View style={styles.radioBG}></View> : null
        }
          </View>
        <Text style={styles.radioText}>Radio Button 1</Text>
      </View>

    </TouchableOpacity>

     <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
      <View style={styles.radioWrapper}>
        <View style={styles.radio}>
        {
          selectedRadio==2 ?  <View style={styles.radioBG}></View> : null
        }
          </View>
        <Text style={styles.radioText}>Radio Button 2</Text>
      </View>

    </TouchableOpacity>





  </View>
  );
  }

const styles=StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  radioText: {
    fontSize: 20
  },
  radio:{
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  radioBG:{
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4
  },

})





export default App;