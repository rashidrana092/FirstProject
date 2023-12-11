import { Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // what is hook? let us use state and other React features without writing a class.
  // useEffect is a hook that is used to use life cycle methods in a function component
  // useEffect methods will automatically load on component load. and will execute on every change in component

  useEffect(() => {
    console.warn('Fareed');
  }, []); // black array this line will stop useeffect to laod on every change and will execute its code on load only.

  return (
    <View>
      <Text style={{ fontSize: 20 }}>LIfe Cyce with useEffect {count}</Text>
      <Button title="update data" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;
