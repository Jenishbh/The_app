import { Text, View, SafeAreaView, StyleSheet,  Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {SecondButton} from '../../components/Button'

const DetailsScreen = ({navigation, route})=>{

    const item = route.params;

    return(
    <SafeAreaView style={{backgroundColor: 'white'}}>

        <View style={style.header} >

            <Icon name ='arrow-back-ios' size={28} onPress={navigation.goBack}/>
            <Text style={{fontSize: 20, fontWeight: 'bold' }} onPress={navigation.goBack}>Details</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator ={false}>
            <View 
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 280,

            }}>
                <Image source={item.image} style={{height: 220, width: 220 }}/>
            </View>
            <View style={style.details}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
                    <View style={style.iconContaioner}> 
                    <Icon name='favorite-border' color={'orange'} size={25} />
                    </View>
                    </View>
                    <Text style={style.detailsText}>
                        {item.details}
                    </Text>
                    <View style={{marginTop: 40, marginBottom: 40 }}>
                        <SecondButton title='Pre-Order' />
                    </View>
                </View>
           
        </ScrollView>

    </SafeAreaView>
)}


const style = StyleSheet.create({ 
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal : 20
    },
    details: {
        paddingHorizontal: 20,
        paddingBottom: 60,
        paddingTop: 40,
        backgroundColor: 'orange',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,

    },

    iconContaioner: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,

    },
    detailsText:{
        marginTop:10,
        lineHeight: 22,
        fontSize:16,
        color: 'white',
        
    }
})

export default DetailsScreen;