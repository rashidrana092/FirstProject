import { View,Text } from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewDemo =()=>{
    return(
   <WebView source={{uri: "https://www.google.com/"}} />
   
   
   ); 
};

export default WebViewDemo;