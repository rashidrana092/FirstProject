import { Text, View, StatusBar, Button } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  fruit = () => {
    console.warn('Apple');
  };
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            marginTop: StatusBar.currentHeight,
            color: 'red',
          }}>
          Class Component
        </Text>
        <Button title="Click Me" onPress={this.fruit} />

        <Student />
      </View>
    );
  }
}

class Student extends Component {
  fruit = () => {
    console.warn('Student component');
  };
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            marginTop: StatusBar.currentHeight,
            color: 'green',
          }}>
          Student component
        </Text>
        <Button title="Click Me" onPress={this.fruit} />
      </View>
    );
  }
}

export default App;
