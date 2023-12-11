import { View,Text} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
 
  const HeadingText =() =>{
    return(
            <View style={{
            width: wp('100%'),
            height: hp('8%'),
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor: 'red',
           // marginBottom: 5
            }}>
                <Text
                style={{fontSize: 30,fontWeight: 'bold',
                textAlign: 'center',
                padding: 5,
                color: 'black'
                
                }}>ATELIER</Text>

            </View>
    );
  };
  
  export default HeadingText;