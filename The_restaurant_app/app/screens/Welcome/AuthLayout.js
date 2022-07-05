import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const AuthLayout =({title, subtitle, titleContainerStyle, childern}) =>{





    return(

        <View
        style={{
            flex:1,
            paddingVertical: 24,
            backgroundColor: 'white'
        }} 
        >
            <KeyboardAwareScrollView
            keyboardDismissMode='on-drag'
            contentContainerStyle={{
                flex:1,
                paddingHorizontal: 24
            }}>

                {/* App Icon */}

                <View 
                style={{
                    alignItems:'center'
                }}>

                    <Image 
                    source={require('../../assets/third.jpg')}
                    resizeMode='contain'
                    style={{
                        height: 100,
                        width:200
                    }}/>

                </View>

                {/* Title */}

                <View
                style={{
                    marginTop: 24,
                    ...titleContainerStyle
                }} >

                    <Text style={{
                        textAlign: 'center',
                        fontFamily: "Bold", fontSize: 22, lineHeight: 30
                    }}>
                        {title}
                    </Text>

                    <Text style={{
                        textAlign:'center',
                        color: 'darkgray',
                        marginTop:8,
                        fontFamily: "Bold", fontSize: 16, lineHeight: 22
                    }} >
                        {subtitle}
                    </Text>

                </View>

                {/* Content */}

                {childern}



            </KeyboardAwareScrollView>


        </View>
    )



}


export default AuthLayout;