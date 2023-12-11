import {Text,View, TouchableOpacity,Alert,TextInput,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginScreen=()=>
{

  const showMessage=()=>
  {
        Alert.alert("Welcome",'Login successfully');
  }
  return (


    <View style={{backgroundColor: 'lightsteelblue',height: hp('100%')}}>
    <View >
      
      <Text style={[styles.myHeading,{ fontWeight: 'bold',textAlign: 'center', color: 'white', justifyContent: 'center', alignContent: 'center',alignItems: 'center',padding: 5, marginBottom: 10,backgroundColor: 'slateblue',fontSize: hp('6%')}]}>Login</Text>

    <Text  style={{fontSize: hp('3%'), paddingLeft: 10}}>Enter Email: </Text>
  <TextInput style={{borderRadius: 2, borderColor: 'black', borderWidth: 1,margin: 10, alignContent: 'center',backgroundColor: 'white',fontSize: hp('2%')}} keyboardType='email-address' placeholder='abc@email.com'></TextInput>


  <Text  style={{fontSize: hp('3%'),paddingLeft: 10}}>Enter Password: 
  </Text>
  <TextInput style={{borderRadius: 2, borderColor: 'black', borderWidth: 1,margin: 10, alignContent: 'center',backgroundColor: 'white',fontSize: hp('2%')}} secureTextEntry= {true} placeholder='A-Z and 0-9 only'></TextInput>
</View>
  <View style={{
                    marginVertical: 5,
                    marginHorizontal: 10,
                    height: 40,
                    widht: 20,
                    backgroundColor: 'dodgerblue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8
    
   }}>
    
    <TouchableOpacity
      style={{alignItems: 'center'}}
      onPress={showMessage}
   
   >
    <Text style={{
                color: 'white',
                fontSize: 20,
                fontStyle: 'bold'

    }}>Submit</Text></TouchableOpacity> 

    </View>
  

  </View>
    
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    textWrapper: {
      height: hp('70%'), // 70% of height device screen
     // width: wp(80),   // 80% of width device screen
             
    },
    myText: {
      fontSize: hp('3%') // End result looks like the provided UI mockup
      
    },
    myHeading: {
        fontSize: hp('5%') // End result looks like the provided UI mockup
        
      },
      loginButtonSection: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
     }
  });
  