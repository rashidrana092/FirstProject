import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Stylesheetdemo = () =>
{
    return(
            <View style={mystyles.container}>
                
                    <Text style={mystyles.myHeading}>
                        MY SELF
                    </Text>
                    <Text style={mystyles.myBodyText}>
                        I am Rana Rashid and i am React Native Developer.
                    </Text>
                
                    <Text style={mystyles.myHeading}>
                        QUALIFICATION
                    </Text>
                    <Text style={mystyles.myBodyText}>
                        Mphil CS (F21-S23), Leads Univeristy, Lahore
                    </Text>

                    <Text style={mystyles.myHeading}>
                        SKILLS
                    </Text>
                    <Text style={mystyles.myBodyText}>HTML</Text>
                    <Text style={mystyles.myBodyText}>CSS</Text>
                    <Text style={mystyles.myBodyText}>C#</Text>
                    <Text style={mystyles.myBodyText}>MS SQL SERVER</Text>
                    <Text style={mystyles.myBodyText}>PHP</Text>
                    <Text style={mystyles.myBodyText}>MYSQL</Text>
                    <Text style={mystyles.myBodyText}>REACT NATIVE</Text>
                
                    <Text style={mystyles.myHeading}>
                        MY FRIENDS
                    </Text>
                    <Text style={mystyles.myBodyText}>BABA FAREED</Text>
                    <Text style={mystyles.myBodyText}>BABA MAKHA</Text>
                    <Text style={mystyles.myBodyText}>BABA RIZWAN</Text>
                
                    
                </View>
    );
}

export default Stylesheetdemo;

const mystyles = StyleSheet.create({
    container: { 
      height: hp('100%'), // 70% of height device screen
      width: wp('100%'),   // 80% of width device screen
     backgroundColor: 'lightsteelblue',
    },
    myHeading: {
        fontSize: hp('4%'),
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
        marginTop: 10,
        backgroundColor: 'black',
        color: 'white'

    },
    myBodyText: {
        fontSize: hp('3'),
        paddingLeft: 5,
        color: 'black'

    }
});
  