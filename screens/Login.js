import {Text,View, Button,Alert,TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginScreen=(props)=>
{

  const showMessage=()=>
  {
         Alert.alert("Welcome",'Login successfully');
        //props.navigation.navigate('FormValidations')
  }
  return (


    <View style={{flex:1,alignContent: 'center', alignItems: 'center', padding: 100,}}>

    <Text style={{fontSize: 30,fontWeight: 'bold',margin: 10}}>Login</Text>

    <Text style={{fontSize: 15}}>Enter Username</Text>
    
      <TextInput style={{width: '100%', borderRadius: 2, borderColor: 'black', borderWidth: 1,margin: 10}}></TextInput>


    <Text style={{fontSize: 15}}>Enter Password</Text>

      <TextInput style={{width: '100%', borderRadius: 2, borderColor: 'black', borderWidth: 1,margin: 10}} secureTextEntry={true}></TextInput>


        <Button
        title="Click Me"
        onPress={showMessage}>

        </Button>

    </View>
  
  
  
  
  
  );
}

export default LoginScreen;