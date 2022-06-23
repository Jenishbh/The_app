import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';


function confirm_res (){

    return(

        <SafeAreaView >
            <View >
                <Icon name='name' size={20}/>
                <Text style={''}> pull details from backend about name</Text>
            </View>
            <View >
                <Icon name='date-range' size={20}/>
                <Text style={''}> pull details from backend about date</Text>
            </View>
            <View >
                <Icon name='clock' size={20}/>
                <Text style={''}> pull details from backend about time</Text>
            </View>
            <View >
                <Icon name='profile' size={20}/>
                <Text style={''}> pull details from backend about count</Text>
            </View>
        </SafeAreaView>
    )

}


export default confirm_res; 
 