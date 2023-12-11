import {View, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BackgroundImage = () => {
  return (

    <ImageBackground
    //,width:width,height: height
    source={require('../../assets/bg.png')}
    resizeMode="cover"
    style={{flex: 1,alignItems: 'center'}}>

      
          {/* <BackgroundImage /> */}
          <ImageBox />
          <HeadingText />                  

  </ImageBackground>
  
    
  );
};
export default BackgroundImage;
