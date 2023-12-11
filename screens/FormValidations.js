import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import React, { useState } from 'react';

const FormValidations = (props) => {
  const [name,setName]=useState('');
  const [age,setAge]=useState(0);
  const [email,setEmail]=useState('');


  const [nameError,setNameError]=useState(false);
  const [ageError,setAgeError]=useState(false);
  const [emailError,setEmailError]=useState(false);

  const SaveData=()=>{
    if (!name){
      setNameError(true)
      
    }
    else {
      setNameError(false)
    }

    if (!age){
      setAgeError(true)
    }
    else {
      setAgeError(false)
    }

    if (!email){
      setEmailError(true)
    }
    else {
      setEmailError(false)
    }

    if(!name || !age || !email){
     return false
   
    }
    props.navigation.goBack();
    }
   

  return (
    <View style={styles.main}>
      <Text style={{fontSize: 30,fontWeight: 'bold',textAlign: 'center'}}>Form Validation</Text>
      <TextInput placeholder="Enter Name" style={styles.textinput}/>
      {
        nameError ? <Text style={styles.errorText}>invalid name</Text>:null
      }
      <TextInput placeholder="Enter Age" style={styles.textinput}/>
       {
        ageError ? <Text style={styles.errorText}>invalid age</Text>:null
      }
      <TextInput placeholder="Enter Email" style={styles.textinput}/>
       {
        emailError ? <Text style={styles.errorText}>invalid email</Text>:null
      }
      <Button title="Save Record"  onPress={SaveData} color='midnightblue' />
     
    </View>
  );
};
export default FormValidations;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 20,
    paddingVertical: 20,
    marginVertical: 20,
  },
  textinput: 
  {
    fontSize: 20,
    borderWidth: 0.50,
    borderColor: 'grey',
    width: 300,
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20.
    

  },
  errorText: {
    fontSize: 14,
    color :'red',
    marginLeft :50,
  }

})
