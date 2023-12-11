import { View,Text,StyleSheet,Button} from 'react-native';

const Buttons=props =>{
    return(
            <View 
            style={{justifyContent: 'center',
                    alignItems: 'stretch',
                    //flex: 1,
                    //backgroundColor: 'red',
                    width: 300,
                    marginTop: 10,
                   // marginBottom: 20,
                    marginVertical: 10
                    //height: 100,
                }}
            //style={{backgroundColor: 'red'}}
            >
                <Button 
                style={styles.myButton} 
                title={props.title} 
                color='black'
                ></Button>
            </View>
    );
}

const styles=StyleSheet.create({
    myButton: {
        
        width: 100,
        height: 100,
    
    }
});

export default Buttons;