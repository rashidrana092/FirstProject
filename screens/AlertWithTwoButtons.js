import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const App = () => {


    const show =() => {
      Alert.alert('Confirmation','Do you want to exit?',
      [
          {
            text: 'YES',
            style: 'destructive',
            onPress: () => alert('yes button clicked')

          },
          {
            text: 'NO',
          }
      ]);
    }

  return (
    <View style={styles.container}>
      <Button title={'Exit'} onPress={show} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;