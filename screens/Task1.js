import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Task1= () =>
{
    return(

        <View>


            <View style={mystyles.mycontainer}>
                <Text style={mystyles.mylogoText}>Holla</Text>              

                <Text style={mystyles.mywelcomeText}>Welcome!</Text>              

                <TextInput placeholder='Email'
                keyboardType='email-address'
                style={mystyles.mytextInput}>

                </TextInput>


                <TextInput placeholder='Password'secureTextEntry={true} 
                 style={mystyles.mytextInput}>

                </TextInput>

                <TouchableOpacity
                style={mystyles.myButton}
                >
                <Text
                style={{fontSize: 17,color: 'white',
                textAlign: 'center'
                }}
                >Login</Text>
                </TouchableOpacity>

                <Text
                  style={{textAlign: 'center',
                    paddingTop: 20,
                    color: '#FF5B2D',
                    fontWeight: 'bold'    
                }}   
                >
                    Forgot password?
                </Text>

                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:30}}>
                <TouchableOpacity
                style={{
                    
                    width: 170,
                    padding: 10,
                    // marginLeft: 0,
                    marginTop: 20,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    flexDirection:"row",
                    height:50

                }}>
                    
                <Image source={require('../assets/google.png')} width={100} height={100}></Image>
                <Text style={{textAlign: 'right',color: '#FF5B2D',fontWeight: 'bold',fontSize: 16,margin: 2,paddingLeft: 15}}>Google
                </Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={{
                    
                    width: 170,
                    padding: 10,
                    // marginLeft: 0,
                    marginTop: 20,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    flexDirection:"row",
                    height:50

                }}>
                <Image source={require('../assets/facebook.png')}  width={50} height={50}></Image>
                    
                <Text style={{textAlign: 'right',color: 'darkblue',fontWeight: 'bold',fontSize: 16,margin: 2,paddingLeft: 15}}>Facebook</Text>


                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',margin:70,alignSelf:'center'}}>
                <Text
                style={{textAlign: 'center',
                  
                }}
                >
                    Don't have an account?
                    </Text>
                    <TouchableOpacity>
                <Text style={{textAlign: 'left',color: '#FF5B2D',fontWeight: 'bold',marginLeft:10
                
                }}>Sign Up</Text>
                </TouchableOpacity>
                </View>

                
            

            </View>

        </View>

    );
}

export default Task1;

const mystyles=StyleSheet.create({
        mycontainer: 
        {
                //width: wp('50%'),
                height: hp('100%')
        },
        mylogoText:
        {
            color: '#FF5B2D',
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 25
        },
        mywelcomeText:
        {
            color: 'black',
            textAlign: 'left',
            margin: 20,
            fontSize: 18,
            fontWeight: 'bold'
        },
        mytextInput:
        {
            marginHorizontal: 20,
            backgroundColor: '#ECEDF1',
            borderRadius: 20,
            padding: 10,
            margin: 5

        },
        myButton:
        {
            marginHorizontal: 20,
            backgroundColor: '#FF5B2D',
            borderRadius: 20,
            padding: 10,
            margin: 5            
        },




});