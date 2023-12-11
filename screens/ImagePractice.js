import { Text, View, Alert, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImagePractice = () => {
  
    const msg = () => {
    Alert.alert('button is clicked');
  };

  return (
    <View>
      <Image style={{width: wp('50%'),height: hp('50%')}} source={require('../assets/pic.jpg')} ></Image>
      
    </View>
  );
};

export default ImagePractice;

