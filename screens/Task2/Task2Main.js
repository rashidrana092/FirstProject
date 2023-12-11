import {
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import BackgroundImage from './BackgroundImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ImageBox from './ImageBox';
import HeadingText from './HeadingText';

import Texts from './Texts';
import Buttons from './Buttons';

const {width, height} = Dimensions.get('window');

const Task2Main = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, height: 'auto'}}>
        <ImageBackground
          //,width:width,height: height
          source={require('../../assets/bg.png')}
          resizeMode="cover"
          style={{flex: 1, alignItems: 'center', height: hp('100%')}}>
          {/* <BackgroundImage /> */}
          <ImageBox />
          <HeadingText />
          <Texts line="Making the best crossants" />
          <Texts line="since 1980" />
          <Buttons title="SHOP" />
          <Buttons title="Found us on Google Maps" />
          <Buttons title="Found us on Tik Tok" />
          <Buttons title="Contact us" />
          <Texts line="1050 Boundary Rd, Vancouver" />
          <Texts line="BC, Canada VGE 4TA" />
          <View style={{paddingTop: 100}}>
            <Texts line="Powered by LOGO.com" />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Task2Main;
