import { Text, View, TouchableOpacity, Image,SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react'
import FormInput from '../../components/FormInput'
import utils from '../../api/utils'
import { PrimaryButton, SecondButton } from '../../components/Button'










const Signup = ({navigation}) =>{
    const [email, setEmail]= React.useState('')
    const [password, setPassword]= React.useState('')  
    const [username, setUsername]= React.useState('')  
    const [showPass, setShowPass]= React.useState('')  

    const [emailError, setEmailError]= React.useState('')
    const [usernameError, setusernameError]= React.useState('')
    const [passwordError, setPasswordError]= React.useState('')

    function isEnableSignUp(){
        return email != '' && username != '' && password != '' && emailError == '' &&
        passwordError == '' && usernameError == ''
    }
    return (
        <SafeAreaView
        style={{
            flex:1,
            paddingVertical: 12,
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
                    alignItems:'center',
                    marginTop:-30
                }}>

                    <Image 
                    source={require('../../assets/third.jpg')}
                    resizeMode='contain'
                    style={{
                        height: 250,
                        width:300
                    }}/>

                </View>

                {/* Title */}

                <View
                style={{
                    marginTop: -30,
                    
                }} >

                    <Text style={{
                        textAlign: 'center',
                         fontSize: 22, lineHeight: 30
                    }}>
                        Getting Started
                    </Text>

                    <Text style={{
                        textAlign:'center',
                        color: 'gray',
                        marginTop:12,
                         fontSize: 16, lineHeight: 22
                    }} >
                        Create an account to continue!
                    </Text>

                </View>

                {/* Form Input and Signup*/}

                <View
                style={{
                    flex:1,
                    marginTop:24
                }} >

            <FormInput 
              lable="email" KeyboardType='email-address'
              autoCompleteType='email'
              onChange={(value) => {

                //validate email
                utils.validateEmail(value, setEmailError)

                setEmail(value)
              }}
              errormsg={emailError}
              appendComponent={
                <View 
                style={{
                  justifyContent: 'center'
                }}>

                  <Image 
                  source={email == '' || (email != '' && emailError =='') ? require('../../assets/correct.png') : require('../../assets/cancle.png') }
                  style={{
                    width:20,
                    height: 20,
                    tintColor: email=='' ? 'gray' : (email !='' && emailError =='')? 'green': 'red',
                  }}

                  />

                  </View>

              }
               />

               <FormInput
               lable='Usename'
               containerStyle={{
                marginTop: 12
               }}
               onChange={(value)=> {
                    setUsername(value)
               }}
               errormsg={usernameError}
               appendComponent={
                <View
                style={{
                    justifyContent:'center'
                }} 
                > 
                    <Image 
                    source={username == '' || 
                    (username != '' && usernameError == '') ? 
                    require('../../assets/correct.png') : require('../../assets/cancle.png')
                    } style={{
                        height:20,
                        width:20,
                        tintColor: username=='' ? 'gray' : (username !='' && usernameError =='')? 'green': 'red',
                        }}
                    />
                </View>
               } 
               />

                <FormInput 
               lable='password'
               securetextEntry={!showPass}
               autoCompleteType='password'
               containerStyle={{
                marginTop: 24,
               }}
               onChange={(value) => {
                    utils.validatePassword(value, setPasswordError)
                    setPassword(value)
                }}
                errormsg={passwordError}
               appendComponent={
                <TouchableOpacity 
                style={{
                  width:40,
                  alignItems:'flex-end',
                  justifyContent: 'center'
                }}
                onPress={()=> setShowPass(!showPass)}    >

                <Image 
                  source={showPass ? require('../../assets/eye_close.png'): require('../../assets/eye.png')}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: 'gray'
                  }}/>

                </TouchableOpacity>
               }
               />
                {/*Sign up & Sign In*/}

                <PrimaryButton
                    title='Create account'
                    disabled={isEnableSignUp() ? false : true}
                    btnContainer={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: 24,
                        borderRadius: 12,
                        backgroundColor: isEnableSignUp() ? 'orange' : 'rgba(227, 120, 75, 0.4)'
                    }}
                    onPress={() => navigation.navigate('Otp')} />

                    <View
                    style ={{
                        flexDirection: 'row',
                        marginTop: 12,
                        justifyContent: 'center'
                    }} >

                        <Text style={{
                            color: 'gray',
                            fontSize: 16, lineHeight: 22
                        }} >
                            Already have an account?
                        </Text>
                        <SecondButton 
                        title='Login'
                        titlestyle={{
                            color: 'orange',
                            fontSize: 16, lineHeight: 22
                        }}
                        onPress={()=> navigation.goBack()}/>

                    </View>
                </View>


                {/* Footer */}

                



            </KeyboardAwareScrollView>


        </SafeAreaView>
    )
  

}






export default Signup;