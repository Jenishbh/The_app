import { Text, View,  Image, Animated, SafeAreaView, Dimensions, ImageBackground,TextButton } from 'react-native'
import React, { Component } from 'react'
import { PrimaryButton } from '../../components/Button';
import { TransactionResult } from 'firebase/database';
const {width, height} = Dimensions.get('window');

const onboarding_screens = [
    {
        id: 1,
        bannerImage: require("../../assets/Res.png"),
        title: "Reservation",
        description: " Reserver yourself before anyone"
    },
    {
        id: 2,  
        bannerImage: require("../../assets/order.png"),
        title: "Pre order",
        description: "We make food ordering fasr, simple and free-no matter if you order online or cash"
    },
    {
        id: 3,
        bannerImage: require("../../assets/third.jpg"),
        title: "Receive the Great Food",
        description: "You’ll receive the great food within a hour. And get free discounts for every order."
    }
]


const OnBording= ({navigation}) =>{

    const scrollX = React.useRef (new Animated.Value(0)).current
    const FlatListRef = React.useRef()
    const [currentIndex, setcurrentIndex] = React.useState(0)
    const onViewChengeRef = React.useRef(({viewableItem, changed})=>{
        setcurrentIndex(viewableItem[0].index)
    })

    const Dots=()=>{

        const dorPotition= Animated.divide(scrollX, width)
        return(
        <View 
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {
                onboarding_screens.map((item, index) =>{

                    const dotColor = dorPotition.interpolate({
                        inputRange: [index -1, index, index +1],
                        outputRange: ['gray', 'orange', 'gray'],
                        extrapolate: 'clamp'

                     } )

                    dorWidth =dorPotition.interpolate({
                        inputRange: [index -1, index, index +1],
                        outputRange: [10, 30, 10],
                        extrapolate: 'clamp'

                     } )
                    return(
                        <Animated.View
                        key={`dot-${index}`}
                        style={{
                            borderRadius:5,
                            marginHorizontal:6,
                            width:dorWidth,
                            height:10,
                            
                            backgroundColor:dotColor
                        }}
                        />
                    )
                })
            }

        </View>)
    }
    function randerFooter(){

        return(
            <View
            style={{
                height: 160
            }}
            >

                {/* Dots */}

                <View 
                style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>

                    <Dots />

                </View>

                {/* Button */}
                {currentIndex< onboarding_screens.length -1 &&
                <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingHorizontal: 24,
                    marginVertical: 24
                }}>
                    <PrimaryButton 
                    label='skip'
                    onPress={()=> navigation.replace('Login')}/>

                    <PrimaryButton
                    label = 'Next'
                    onPress={()=> {
                        let index = Math.ceil(Number(scrollX._value/ width))

                        if (index < onboarding_screens.length-1){

                            FlatListRef?.current?.scrollToIndex({
                                index: index+1,
                                animated: TransactionResult
                            })

                        }else{
                            navigation.replace('Login')
                        }
                    }} />
                    

                </View>
    }
    </View>    )
    }


    return(
        <SafeAreaView
            style={{
                flex:1,
                backgroundColor: 'white'
            }}>

                <Animated.FlatList 
                ref={FlatListRef}
                horizontal
                pagingEnabled
                data={onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [
                        {nativeEvent: {contentOffset: { x:scrollX}
                        }}
                    ]
                )}
                onViewableItemsChanged={onViewChengeRef.current}
                keyExtractor={(item)=>`${item.id}` }
                renderItem={({item, index}) => {
                    return(
                        <View 
                        style={{
                            width:width
                        }}>
                            {/* Header */}

                            <View 
                            style={{
                                flex: 3
                            }}>
                                <ImageBackground 
                                style={{
                                    flex:1,
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <Image source={item.bannerImage}
                                resizeMethod='contain'
                                    style={{
                                        width: width*0.9,
                                        height: width*0.9,
                                        top:-60,
                                        marginBottom: -24
                                    }}/>

                                
                                </ImageBackground>
                            </View>

                            {/* Details */}

                            <View
                            style={{
                                flex:1,
                                marginTop: 30,
                                
                                alignItems: 'center',
                                paddingHorizontal: 12
                            }}>

                                <Text style={{ fontSize: 35, lineHeight: 36}}>
                                    {item.title}
                                </Text>
                                <Text style={{
                                    marginTop: 24,
                                    textAlign: 'center',
                                    color: 'darkgray',
                                    paddingHorizontal: 24,
                                     fontSize: 16, lineHeight: 22

                                }}>
                                    {item.description}
                                </Text>

                            </View>




                        </View>
                    )
                }}
                />



                {randerFooter()}





        </SafeAreaView>
    )

}











export default OnBording;