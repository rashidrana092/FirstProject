import { View,Text,StyleSheet} from 'react-native';

const Texts=props =>{
    return(
            <View 
            //style={{backgroundColor: 'red'}}
            >
                <Text style={styles.myText}>{props.line}</Text>
            </View>
    );
}

const styles=StyleSheet.create({
    myText: {
        fontSize: 14,
        color: 'black'        
    }
});

export default Texts;