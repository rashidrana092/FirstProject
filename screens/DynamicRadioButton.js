import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
'react';
import React,{useState} from 'react';

const DynamicRadioButton=()=> {
  
    const skills=[
        {
            id: 1,
            name: "C#"
        },
        {
            id: 2,
            name: "React Native"
        },
        {
            id: 3,
            name: "Javascript"
        },
        
    ]

const[selectedRadio,setSelectedRadio]=useState(1) // 1 means 1st radio nbutton 2 means second radio button

  return (
    <View style={styles.main}>
        {
            skills.map((item,index)=>
            <TouchableOpacity
            key={index}
            onPress={()=>setSelectedRadio(item.id)}>
   
      <View style={styles.radioWrapper}>
        <View style={styles.radio}>
        {
          selectedRadio===item.id ?  <View style={styles.radioBG}></View> : null
        }
          </View>
        <Text style={styles.radioText}>{item.name}</Text>
      </View>

    </TouchableOpacity>
    )
}

    




  </View>
  );
  }

const styles=StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',

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
    alignItems: 'center',
    justifyContent: 'center',

  },
  radioBG:{
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4
  },

})





export default DynamicRadioButton;