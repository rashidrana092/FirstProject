import { Text,View,Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React,{useState} from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const Stack=createNativeStackNavigator();

const PassingDatainStackNavigation =() =>{

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

export default PassingDatainStackNavigation;



const Home =(props)=>{

    console.warn(props.route.params)
    const {username,age}=props.route.params;

    return(
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize: 30,fontWeight: 'bold'}}>Home Screen</Text>
            <Text style={{fontSize: 30,fontWeight: 'bold'}}>
                {/* we can write below line in short by assing it to array */}
                {/* Name: {props.route.params.name}</Text> */}
                Name: {username}
            </Text>
            <Text style={{fontSize: 30,fontWeight: 'bold'}}>
                Age: {age}</Text>
        </View>


    );
}

const Login =(props)=>{
    // const name='Fareed';
    const age=40;

    const [username,setUserName]=useState("");

    return(
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{fontSize: 30,fontWeight: 'bold'}}>Login Screen</Text>
            <TextInput placeholder='enter name' onChangeText={(text)=>setUserName(text)}
            style={{borderWidth: 1,borderColor: 'black',fontSize: 20}}
            />
            
            <Button title='Go to Home Screen' 

            // if name and key is different then like this {name: username,age: userage}
            // onPress={()=>props.navigation.navigate("Home",{name: name,age: age})} />

            // if name and key is same then we can pass just {name,age} like below */}
            onPress={()=>props.navigation.navigate("Home",{username,age})} />
            


        </View>


    );
}

const Header =()=>{
    return(<TextInput placeholder='type here'/>);
}
