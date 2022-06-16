import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-navigation';
import CircularProgress from 'react-native-circular-progress-indicator';


function Manager_home(){
    const [value, setValue] = useState(0);





    return(
        <SafeAreaView>
            <CircularProgress
                radius={90}
                value={80}
                textColor='#222'
                fontSize={20}
                valueSuffix={'%'}
                inActiveStrokeColor={'#2ecc71'}
                inActiveStrokeOpacity={0.2}


            
            />

        </SafeAreaView>

    );
}






export default Manager_home;
  
