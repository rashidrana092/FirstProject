import {Text,View,Switch} from 'react-native';
import React,{useState} from 'react';

const SwitchPractice=() =>
{
    const [isEnabled, setIsEnabled]=useState(true);
    const [text, setText]=useState('Press the switch');
   
    const toggleSwitch=() => {
        if (isEnabled) {
            setText('Inactive')
        }
        else {
            setText('Active')
        }

        setIsEnabled(previousState => !previousState)
    }
    return(
            <View   style={{margin: 20,flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                        }}>
                <Text>{text}</Text>
                <Switch 
                    trackColor={{true: 'green',false: 'grey'}}
                    thumbColor={isEnabled? 'white':'red'}
                    ios_backgroundColor='grey'
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  
                />
            </View>

    );
}

export default SwitchPractice;