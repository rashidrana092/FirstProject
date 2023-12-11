import { createDrawerNavigator } from '@react-navigation/drawer';
//import Login from './src/screens/Login/Login';
//import Home from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import Test1 from './src/screens/Test1';
import Test2 from './src/screens/Test2';

const Drawer = createDrawerNavigator();

export default NavigationDrawer=() =>{
  return (

    //<Test2 />
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Test1'>
      <Drawer.Screen name="Screen 1" component={Test1} />
      <Drawer.Screen name="Screen 2" component={Test2} />
    </Drawer.Navigator>
    </NavigationContainer>
    
  );
}