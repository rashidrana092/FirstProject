import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DimensionsDemo = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text>Screen Width: {width}</Text>
      <Text>Screen Height: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DimensionsDemo;
