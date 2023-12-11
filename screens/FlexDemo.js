import { View } from 'react-native';

const FlexDemo =()=>{
    return(
        <View style={{flex: 1}}>
        <View style={{backgroundColor: 'red',flex: 1}} />   
        <View style={{backgroundColor: 'green',flex: 2}} />   
        <View style={{backgroundColor: 'blue',flex: 1}} />   
      </View>
      
    );
}

export default FlexDemo;