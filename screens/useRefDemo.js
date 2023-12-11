import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import React, { useState ,useRef} from 'react';


//useRef is a hook which return a reference.
// it is used to count how many time a compoent render or we can use it to focus on a textinput

const useRefDemo = () => {
  const input=useRef();
  
  const updateInput=()=>{
    input.current.focus();
    // below line can be used to set style for input field when on focus
    input.current.setNativeProps({fontSize: 24})
  }


  return (
    <View style={styles.main}>
      <Text style={{fontSize: 30,fontWeight: 'bold',textAlign: 'center'}}>Form Validation</Text>
      <TextInput placeholder="Enter Name" style={styles.input}/>
     
      <TextInput placeholder="Enter Password" style={styles.input}/>
     
      <Button title="Save Record"  onPress={updateInput} color='midnightblue' />
     
    </View>
  );
};
export default useRefDemo;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 16
  },
  input: 
  {
  bordercolor: 'skyblue',
  borderWidth: 2,
  margin: 10
  
  }
  
})
