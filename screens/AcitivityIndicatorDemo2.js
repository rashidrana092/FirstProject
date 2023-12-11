import { View,Text,Button,ActivityIndicator } from 'react-native';
import React,{useState}  from 'react';

const AcitivityIndicatorDemo2 =()=>{

    const [show,setShow]=useState(false)

    const displayLoader=()=>{
        setShow(true)

        setTimeout(()=>{
            setShow(false)
        },3000);
    }


    return(
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                {/* <ActivityIndicator size={"small"}/>
                <ActivityIndicator size={80} color={'red'}/>
                 {/* to hide ActivityIndicator make animating prop false */}
                {/* <ActivityIndicator size={"large"} color={"blue"} animating={false}/>
                 */}

                 <ActivityIndicator size={80} color={'red'} animating={show}/>
                 {/* another way to hide loader */}
                 {/* {
                    show ? <ActivityIndicator size={"large"} color={'red'} /> : null
                 } */}

                  <Button title='Show Loader' onPress={displayLoader}/>                
        </View>
    );
}

export default AcitivityIndicatorDemo2;