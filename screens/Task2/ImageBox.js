import {View,Image} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  

const ImageBox =()=>{
    return(

        <View>
            <View 
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 25,
                //backgroundColor: 'red'
            }}>
            <Image source={require('../../assets/logo.png')}
            style={{width: wp('40%'), height: hp('20%')}}/>
            </View>
            
        </View>
    

    );
}
export default ImageBox;