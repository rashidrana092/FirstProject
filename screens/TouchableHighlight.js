import { Text, View,Button,TouchableHighlight,StyleSheet } from 'react-native';
'react';


const App=()=> {
  
// TouchableHighlight

// • What it does: Darkens or lightens the background of the element when pressed.

// • When to use it: On iOS for touchable elements or buttons that have a solid shape or background, and on ListView items.

// TouchableOpacity

// • What it does: Lightens the opacity of the entire element when pressed.

// • When to use it: On iOS for touchable elements that are standalone text or icons with no background color.

// TouchableNativeFeedback

// • What it does: Adds a ripple effect to the background when pressed.

// • When to use it: On Android for almost all touchable elements.

// If you want to

// highlight button on press — use TouchableHighlight
// change button's opacity on press — use TouchableOpacity

  return (
    <View style={styles.main}>

<TouchableHighlight>
    <Text style={[styles.button,styles.success]}>Success
 </Text>
   </TouchableHighlight>

  <TouchableHighlight>
    <Text style={styles.button}>Button
 </Text>
   </TouchableHighlight>

  <TouchableHighlight>
    <Text style={[styles.button,styles.error]}>Error
 </Text>
   </TouchableHighlight>
  





  </View>
  );
  }

const styles=StyleSheet.create({
  main: {
    flex: 1
  },
  button: {
  backgroundColor: '#bbb',
  color: 'white',
  fontSize: 30,
  textAlign: 'center',
  padding: 10,
  margin: 50,
  borderRadius: 10,
  shadowColor: 'black',
  elevation: 10,
  shadowOpacity: 1,

  },
  success: {
    backgroundColor: 'green'
  },
  error: {
    backgroundColor: 'red'
  }


})





export default App;