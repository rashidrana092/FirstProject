import {ActivityIndicator,View} from 'react-native';

const ActivityIndicatorPractce = () =>
{
    return(
        <View style={{justifyContent: 'space-around',flex: 1,flexDirection: 'row'}}>
            <ActivityIndicator size='small' style= {{margin: 20}}/>
            <ActivityIndicator size='large'style= {{margin: 20}}/>


            <ActivityIndicator size='small' style= {{margin: 20}} color='red'/>
            <ActivityIndicator size='large'style= {{margin: 20}} color='blue'/>


        </View>



    );

}

export default ActivityIndicatorPractce;