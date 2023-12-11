import {View,ToastAndroid,Button,StyleSheet,StatusBar, Alert} from 'react-native';

const ButtonDemo =() => {
    const showToast = () => {
        ToastAndroid.show('button press function called', ToastAndroid.SHORT);
      };

    const functionWithParameter=(val)=>{
        console.warn(val)//Alert.alert(val);
    }
    
    
      return (
        <View style={styles.container}>
          <Button title="Show Toast" onPress={() => showToast()} color={'indianred'} />

          <Button title="Show Alert" onPress={() => functionWithParameter('Fareed')} color={'dodgerblue'}/>

        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        padding: 8,
      },
    });
    
export default ButtonDemo;