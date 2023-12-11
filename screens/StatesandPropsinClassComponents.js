import { Text, View, StatusBar, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Fareed',
    };
  }

  updateName(val) {
    this.setState({ name: val });
  }

  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30,
            marginTop: StatusBar.currentHeight,
            color: 'red',
          }}>
          {this.state.name}
        </Text>
        <TextInput
          placeholder="enter name"
          onChangeText={(text) => this.updateName(text)}
        />
        <Button title="Click Me" />

        <Student name={this.state.name} />
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
          Student Name: {this.props.name}
        </Text>
      </View>
    );
  }
}

export default App;
