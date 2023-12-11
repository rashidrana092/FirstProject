import {Text, View,StyleSheet ,TextInput,Button} from 'react-native';
import React,{useState} from 'react';


export default function App() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [showdata,setShowData]=useState(false);
  
  const resetForm=()=>{
    setShowData(false);
    setName('');
    setEmail('');
    setPassword('');


  }
    return (
    <View style={{justifyContent: 'center'}}>
  <Text style={styles.heading}>Simple Form</Text>
  <TextInput
    style={styles.inputBox}
    placeholder='Enter Name'
    onChangeText={(text)=>setName(text)}
    value={name}
  />
  <TextInput
    style={styles.inputBox}
    placeholder='Enter Email'
    onChangeText={(text)=>setEmail(text)}
    value={email}
  />
  <TextInput
    style={styles.inputBox}
    secureTextEntry={true}
    placeholder='Enter Password'
    onChangeText={(text)=>setPassword(text)}
    value={password}
  />

<View style={{margin: 5}} >
    <Button title='Show Data' onPress={()=>setShowData(true)} color= 'coral'/>
    </View>
    <View style={{margin: 5}}>
   <Button title='Clear Data' onPress={resetForm}/>
</View>

<View>
  {
    showdata ?
    <View>
      <Text style={{fontSize: 20}}>Name: {name}</Text>
      <Text style={{fontSize: 20}}>Email: {email}</Text>
      <Text style={{fontSize: 20}}>Password: {password}</Text>
      </View>
       : null
  }
</View>

</View>
    
  );
}

const styles=StyleSheet.create({

  heading: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: 'bold',
  },
  inputBox: {
borderWidth: 1,
borderColor: 'grey',
margin: 10,
borderRadius :10,
fontSize: 20,
height: 30,
paddingHorizontal: 10
  }
})