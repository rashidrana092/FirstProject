import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (

    <View  style={{ flex: 1}}>
      <View style={{ flex: 1,backgroundColor: 'coral',flexDirection: 'row' }}>
        <View style={{ flex: 1,backgroundColor: 'red' }}></View>
       <View style={{ flex: 1,backgroundColor: 'yellow' }}></View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'midnightblue' }}></View>
      <View style={{ flex: 2, backgroundColor: 'seagreen' }}></View>






    </View>
  );
}
