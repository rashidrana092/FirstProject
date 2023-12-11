import { Text,View,Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React,{useState} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const Stack=createNativeStackNavigator();

const StackNavigationDemo =() =>{

const btnAction =() =>{
    console.warn("Fareed");
}
    
    return(
        <NavigationContainer>
            <Stack.Navigator
            // screenOptions if want style for all scrrens in stack.navigator
            // options in screen tag if want style for one screen 
              // if want to change style for all screen then code here
               
            screenOptions= {{

                //title: "User Login",
                // title prop will not work here because we want to apply for all component
                headerStyle:
                {
                    backgroundColor: 'aliceblue',
                   
                },  
                headerTintColor: 'orange',
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white'
                }

            }}
            >
  {/* name wil be used in navigation */}
  
                <Stack.Screen name='Login' component={Login} 
               options= {{
                    headerTitle: ()=>
                    <Button title='left' onPress={btnAction}/>,
                    headerRight: ()=>
                    <Header />
                }}
               
                />
                <Stack.Screen name='Home' component={Home}  
                // if want to change style for one screen then code here
               options= {{
                title: "Home Screen",
                headerStyle:
                {
                    backgroundColor: 'coral',
                   
                },  
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white'
                }

            }}
                
                />

        </Stack.Navigator>
        </NavigationContainer>


    );
}

export default StackNavigationDemo;



const Home =()=>{
    return(
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize: 30,fontWeight: 'bold'}}>Home Screen</Text>
        </View>


    );
}

const Login =(props)=>{
    return(
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize: 30,fontWeight: 'bold'}}>Login Screen</Text>
            <Button title='Go to Home Screen' onPress={()=>props.navigation.navigate("Home")}></Button>
       
        </View>


    );
}

const Header =()=>{
    return(<TextInput placeholder='type here'/>);
}
