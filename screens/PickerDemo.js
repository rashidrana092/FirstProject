import {View, Picker } from 'react-native';
import React,{Component} from 'react';

export default class App extends Component {

constructor(){
  super();
  this.state={selectedLabel: ''};
}

Show=(value)=>{
  alert(value);
}
render()
{
  return (
    <View>
        <Picker 
          onValueChange={this.Show.bind()}
          >
          <Picker.Item label="Select a Course" value="0" color="red"></Picker.Item>  
          <Picker.Item label="C#" value="5000"></Picker.Item>
          <Picker.Item label="React Native" value="4000"></Picker.Item>
          <Picker.Item label="C++" value="3000"></Picker.Item>
          </Picker>
           
    </View>
  );
}
}