import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import LoginScreen from '../Login';
import Splash from './Splash';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import Task1 from '../Task1';


const MyProfile = (props) => {
  
  const Task1 = () => {
    props.navigation.navigate('Task1')
  };
  
  const Task2 = () => {
    props.navigation.navigate('Task2')
  };
  const Task3 = () => {
    props.navigation.navigate('Task3')
  };
  return (
    <View style={styles.container}>
      <Text 
      style={{fontSize: 30,fontWeight: 'bold',marginTop: 20,color: 'black'}}
      >Rana Rashid</Text>
      <Text
      style={{fontSize: 20,fontWeight: 'bold'}}
      >
        React Native Developer
        </Text>
      <Text
      style={{fontSize: 30,fontWeight: 'bold',color: 'black'}}
      >My Work</Text>

      <TouchableOpacity style={styles.myButton} 
      onPress={Task1}
      >
        <Text style={styles.myButtonText}>Click to Open Task 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
      onPress={Task2}
      
      >
        <Text style={styles.myButtonText}>Click to Open Task 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.myButton}
      onPress={Task3}
      
      >
        <Text style={styles.myButtonText}>Click to Open Task 3</Text>
        
      </TouchableOpacity>
      
    </View>

  );
};

export default MyProfile;

const styles = StyleSheet.create({
container :{
  flex: 1,
  backgroundColor: 'lightsteelblue',
  //justifyContent: 'center',
  alignItems: 'center',
},
myButton:{
  borderWidth: 1,
//  width:wp(100),
  //justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  marginTop: 10,
  backgroundColor: 'midnightblue',
},
myButtonText: {
  color: 'white'
}

})