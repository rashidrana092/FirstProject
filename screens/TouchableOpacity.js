import { Text, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const TouchableOpacityDemo = () => {
  
    const msg = () => {
    Alert.alert('button is clicked');
  };

  return (
    <View style={{ margin: 10, flex: 1 }}>
      <TouchableOpacity style={mystyle.myButtonContainer} onPress={msg}>
        <Text style={mystyle.myButtonText}>Click Me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        width: '95%',
        height: 50, 
        backgroundColor: 'red',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 10

        }}
         onPress={msg}>
        <Text style={{
            fontSize: 25,
            color: 'white',
            textAlign: 'center'
            }}>Click Me</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default TouchableOpacityDemo;

const mystyle = StyleSheet.create({
  myButtonContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 40,
    widht: 20,
    backgroundColor: '#5d57ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  myButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});