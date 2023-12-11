import {View,Image, Text, Modal, StyleSheet, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default Task4 = () => {
  return (

    <Modal>       
    <View 
    style={{
        backgroundColor: '#A3DBEC',
        // flex: 1,
        height:"80%",
        width:"100%",
        position:"absolute",
        bottom:0,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        
        
    }}>


    <View style={{height: hp(15),flexDirection: 'row',justifyContent: 'space-around',
    //backgroundColor: 'coral',
    marginBottom: hp(2)}}>
     
     <Image source={require('../assets/flowerleft.png')}
     style={{width: wp(20), height: hp(10),marginTop: 20,marginLeft: -20}}></Image> 
   
        <Text style={{
          fontSize: 40,
          textAlign: 'center',
          color: 'black',
          marginTop: 30,
          }}>تخریج</Text>

<Image source={require('../assets/flowerright.png')}
     style={{width: wp(20), height: hp(10),marginTop: 20,marginRight: -20}}></Image> 
  
    </View>
        
          <ScrollView>
          <MyModal/>
          <MyModal/>
          <MyModal/>
          <MyModal/>
          </ScrollView>
        
    
     </View>
    </Modal>
  );
};

const MyModal=(props)=>{
    return(
              
            <View
                 style={styles.modalView}
                >
                    <View >
                        <Text 
                        style={styles.modelHeading}
                        >کتاب کا نام</Text>     
                    </View>
                     <View 
                     style={{flexDirection: 'row-reverse',justifyContent: 'space-around',
                    marginBottom: 10}}
                     >
                   <Text style={styles.modalText}>14
                    </Text>
                    <Text style={styles.modalText}>45
                    </Text>
                    <Text style={styles.modalText}>123
                    </Text>
                    <Text style={styles.modalText}>678
                    </Text>
                        
                    </View>
                </View>
                
          
        )
}
const styles = StyleSheet.create({
    centeredView:{
     // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //marginTop:20
      
    },
    modalView: {
      backgroundColor: '#BFF5FF',
      borderRadius: 20,
      width: wp(90),
      height: hp(15),
      justifyContent: 'space-around',
      paddingHorizontal: 10,
      marginVertical: 10,
      borderWidth:1,
      borderColor:"white",
      //marginTop:20
      //marginLeft: 20
      // top: 150,
      alignSelf: 'center'
    },
    modalText: {
        fontSize: 25,
        color: 'black',
        padding: 10,
        backgroundColor: '#D3FFFE',
        width: wp(20),
        textAlign: 'center',
        height: hp(7),
        borderRadius: 20,   
    },
    modelHeading: {
        fontSize: 30,
        color: 'black',
        paddingRight: 10,
        textAlign: 'right',
        marginTop: 10,
       // marginBottom: 10,
    }
    
  });
  