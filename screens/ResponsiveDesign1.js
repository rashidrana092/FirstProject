import {View,Text,Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ResponsiveDesign1 = () =>
{
    return(
        <View style={{width: wp('60%'), height: hp('80%'),backgroundColor: 'skyblue',flex: 1,flexDirection: 'row'}}>
    
    <View style={{width: wp('20%'), height: hp('20%'),backgroundColor: 'pink',flex: 2,flexDirection: 'row'}}>

        <Text style={{fontSize: hp('15%')}}>Fareed</Text>

    </View>
    </View>

    );
    

}

export default ResponsiveDesign1;