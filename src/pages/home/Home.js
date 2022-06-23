import { Text, View, TouchableOpacity } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, {useState, useRef} from 'react'
import Card from '../../components/card/Card';
import { HStack, Center } from 'native-base';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Swiper from 'react-native-deck-swiper';
import { COLORS, SIZES } from '../../components/constans/theme';
import data from '../../assets/json/girl.json';
import styles from './styles';

export default function Home({navigation}) {
    const swiperRef = useRef();
    const [index ,setIndex] = useState(0);
    const tabBarHeight = useBottomTabBarHeight();
    const handleOnSwipedRight =() =>{
        setIndex((index + 1) % data.length);
    }
    const handleOnSwipedLeft =() =>{
        setIndex((index + 1) % data.length);
    }
    const goToDetail = () =>{
        navigation.navigate("Detail",{
            position: index
        });
    }
    return (
        <View style={{ flex: 1, paddingTop: tabBarHeight }}>
            <Swiper
                backgroundColor= {COLORS.white}
                ref={swiperRef}
                cards={data}
                cardIndex={index}
                renderCard = {card => <Card card = {card}/>}    
                onSwipedRight={handleOnSwipedRight}
                onSwipedLeft={handleOnSwipedLeft}
                stackSize = {4}
                stackScale = {10}
                stackSeparation = {14}
                disableTopSwipe
                disableBottomSwipe
                infinite
                overlayLabels={{
                    left : {
                        title : "NOPE",
                        style : {
                            label: {
                                fontSize : SIZES.h1,
                                color : COLORS.red,
                                borderColor: COLORS.red,
                                borderWidth: 2,
                            },
                            wrapper: {
                                flexDirection : "column",
                                alignItems : "flex-end",
                                justifyContent: "flex-start",
                                
                                marginTop: 40,
                                marginLeft: -20
                            }
                        }
                    },
                    right : {
                        title : "LIKE",
                        style : {
                            label: {
                                fontSize : SIZES.h1,
                                color : COLORS.green,
                                borderColor: COLORS.green,
                                borderWidth: 2,
                            },
                            wrapper: {
                                flexDirection : "column",
                                alignItems : "flex-start",
                                justifyContent: "flex-start",
                                marginTop: 40,
                                marginLeft: 20
                            }
                        }
                    },
                }}  
            />
            <Center style={{marginTop: SIZES.height / 1.25}}>
                <HStack space={4} width={SIZES.width / 1.1} justifyContent="space-between" alignItems="center" >
                    <TouchableOpacity
                        onPress={()=>{
                            setIndex(index-1);
                            swiperRef.current.swipeBack();
                        }}
                    >
                        <MaterialCommunityIcons style={styles.icon} name='reload' size={40} color={COLORS.yellow} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            swiperRef.current.swipeLeft();
                        }}
                    >
                        <Feather style={styles.icon} name='x' size={50} color={COLORS.red} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            swiperRef.current.swipeRight();
                        }}
                    >
                        <MaterialCommunityIcons style={styles.icon} name='cards-heart' size={50} color={COLORS.green} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToDetail}>
                        <MaterialCommunityIcons style={styles.icon} name='star' size={40} color={COLORS.blue} />
                    </TouchableOpacity>
                </HStack>
            </Center>
        </View>
    )
}
