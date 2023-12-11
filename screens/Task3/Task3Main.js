import {    View,
            StatusBar,
            Text,
            Image,
            TouchableOpacity
} from 'react-native';

const Task3Main =()=>{

return(

    <View style={{flex: 1}}>

        {/* Top View */}
<View style={{backgroundColor: '#6C3EC4',
flex: 2,borderBottomLeftRadius: 100
}}>
    <Image
source={require('../../assets/wba.png')}
     width={10}
     height={15}
     style={{marginTop: 20,marginLeft: 20}}
            />
    <Text
        style={{color:'white',fontSize: 30,marginLeft: 20,marginTop: 10}}
    >Profile Settings</Text>
    </View>


        {/* Image Logo */}
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Image
source={require('../../assets/icons8-user-50.png')}
     style={{width: 50,height: 50}}
            />
        </View>

        {/* Center Text */}
        <View 
        style={{backgroundColor: 'white',flex: 1,justifyContent: 'center',alignItems: 'center',paddingTop: 5,marginVertical: 10}}>
        <Text
        style={{justifyContent: 'center',alignItems: 'center',
        fontSize: 25,fontWeight: 'bold'}}>
        Augusta F</Text>
        
        <View
        style={{justifyContent: 'center',alignItems: 'center',
        fontSize: 15,marginVertical: 10,flexDirection: 'row'}}
        >
        
        <Text
        style={{justifyContent: 'center',alignItems: 'center',
        fontSize: 15,marginVertical: 10}}>
        augusta@yaypay</Text>

        <Image
source={require('../../assets/copy-content.png')}
     style={{width: 20,height: 20,marginHorizontal: 10}}
            />
</View>
        </View>



    {/* line Seperator */}
    <View 
        style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: 10}}>
    
        <View 
        style={{flex: 1, height: 1, backgroundColor: 'black'}}>
        </View>
        
    </View>




        {/* Account Info */}
        <View style={{backgroundColor: 'white',flex: 3,
        justifyContent: 'center'
        }}>


         <Text
         style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 30,
            color: 'black'
            
        }}
         >Account Info</Text>   

        <View
            style={{
            marginTop: 20,
            marginLeft: 30,
            width: 70,
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start'

            }}>

    <Image
        source={require('../../assets/phonewhite.png')}
        style={{
        width: '50%',
        height: '50%',
        borderRadius: 200,
        alignSelf: 'center',
        backgroundColor: '#6C3EC4',
        marginBottom: 30
        }}
    />

<View style={{flexDirection: 'column'}}>

    <Text style={{marginLeft: 12,width: 100}}>Mobile Number</Text>  
    <Text style={{marginLeft: 10,width: 150}}> +91 12451 13526 </Text>

</View>


  </View>


  <View
            style={{
            marginTop: 10,
            marginLeft: 30,
            width: 70,
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start'
            }}>

    <Image
        source={require('../../assets/icons8-bank-48.png')}
        style={{
        width: '50%',
        height: '50%',
        borderRadius: 200,
        alignSelf: 'center',
        backgroundColor: '#6C3EC4',
        marginBottom: 30
        }}
    />

<View style={{flexDirection: 'column'}}>

    <Text style={{marginLeft: 12,width: 100}}>Bank Account</Text>  
    <Text style={{marginLeft: 10,width: 150}}> 1273 xxxx xxxx 8771 </Text>

</View>


  </View>
        
    </View>

    <View style={{
        backgroundColor: '#6C3EC4',
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center'
        }}>

    <TouchableOpacity>
        <Image
    source={require('../../assets/icons8-compass-50.png')}
        style={{
        backgroundColor: '#6C3EC4',
        }} />

        <Text style={{paddingLeft: 5,color: 'aliceblue'}}>
        Explore
        </Text>
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
    source={require('../../assets/icons8-order-50.png')}
        style={{
        backgroundColor: '#6C3EC4',
        }} />

        <Text style={{paddingLeft: 5,color: 'aliceblue'}}>
        My order
        </Text>
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
    source={require('../../assets/icons8-favourites-32.png')}
        style={{
        backgroundColor: '#6C3EC4',
        width: 50,
        height: 50
        }} />

        <Text style={{paddingLeft: 5,color: 'aliceblue'}}>
        Favourite
        </Text>
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
    source={require('../../assets/icons8-user-50.png')}
        style={{
        backgroundColor: '#6C3EC4',
        }} />

        <Text style={{paddingLeft: 5,color: 'aliceblue'}}>
        Profile
        </Text>
    </TouchableOpacity>

        </View>

    </View>
  
    );
}


export default Task3Main;