import { View,ImageBackground,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ImagebackgroundPractice=()=>
{
    return(
        <View>
            <ImageBackground source={require('../assets/pic.jpg')}   
            resizeMode='stretch' style={{width: wp('60%'), height: hp('30%'),backgroundColor: 'red'}}>
            <Text style={{color: 'white',fontSize: 25}}>My Background</Text>
            </ImageBackground>

            <ImageBackground source={require('../assets/pic.jpg')}   resizeMode='stretch' style={{width: wp('60%'), height: hp('30%'),backgroundColor: 'red'}}>
            <Text style={{color: 'white',fontSize: 25}}>My Background</Text>
            </ImageBackground>

            <ImageBackground source={require('../assets/pic.jpg')}   resizeMode='stretch' style={{width: wp('60%'), height: hp('30%'),backgroundColor: 'red'}}>
            <Text style={{color: 'white',fontSize: 25}}>My Background</Text>
            </ImageBackground>



                       
        </View>



    );
}

export default ImagebackgroundPractice;