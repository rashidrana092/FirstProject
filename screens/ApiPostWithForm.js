import { View,Text, StyleSheet,TextInput,Button } from 'react-native';
import React,{useEffect,useState} from 'react';
import { ListItem } from 'react-native-elements';

const ApiPostWithForm =()=>{

 const [name,setName]=useState('');
 const [age,setAge]=useState(0);
 const [email,setEmail]=useState('');

 const [nameError,setNameError]=useState(false);
 const [ageError,setAgeError]=useState(false);
 const [emailError,setEmailError]=useState(false);

const saveData = async () =>{

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
  

    console.warn(name);

    const url="http://10.0.2.2:3000/users";
    let result=await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type":  "application/json"
        },
        body: JSON.stringify({name,email,age})
    });
    result=await result.json();
    if(result){
        console.warn("data added")
    }
}
    return(
        <View style={styles.main}>
        <Text style={{fontSize: 30,fontWeight: 'bold',textAlign: 'center'}}>API Post with Form</Text>
        <TextInput placeholder="Enter Name" style={styles.textinput}
        value={name}
        onChangeText={(text)=>setName(text)}/>
         {
            nameError ? <Text style={styles.errorText}>invalid name</Text>:null
        }
        <TextInput placeholder="Enter Age" style={styles.textinput}
           value={age}
           onChangeText={(text)=>setName(text)}/>
        {
        ageError ? <Text style={styles.errorText}>invalid age</Text>:null
      }
        <TextInput placeholder="Enter Email" style={styles.textinput}
           value={email}
           onChangeText={(text)=>setName(text)}/>
       {
        emailError ? <Text style={styles.errorText}>invalid email</Text>:null
      } 
        <Button title="Save Record"  onPress={saveData} color='midnightblue' />
       
      </View>    );
}
export default ApiPostWithForm;

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
    marginLeft :60,
  }

})
