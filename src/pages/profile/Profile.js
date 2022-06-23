import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { HStack, VStack, Center } from 'native-base';
import Feater from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import img from "../../assets/img/thua_ngai.jpg"
import { COLORS, SIZES } from "../../components/constans/theme"
import styles from './styles';
const Profile = ({navigation, route}) => {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <View style={{ flex: 1, paddingTop: tabBarHeight }} >
            <Center>
                <VStack height={SIZES.height / 1.15} space={2} justifyContent="space-between" >
                    <Center marginTop={5}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("ProfileNav")}
                        >
                            <Image source={img} style={styles.image} />
                            <Feater name='edit' color={COLORS.white} size={25} style={styles.icon} />
                        </TouchableOpacity>
                        <Text style={styles.title} >Roger Federer, 32yr</Text>
                        <Text>World Class Tennis Player</Text>
                        <Text>JCE, Bangalore</Text>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("Setting")}
                        >
                            <HStack marginTop={6} space={2} alignItems="center" >
                                <Ionicons name='settings' color={COLORS.pink} size={40} />
                                <Text style={styles.title_setting} >Settings</Text>
                            </HStack>
                        </TouchableOpacity>
                    </Center>
                    <Center>
                        <Text style={styles.title} >Going out tonight?</Text>
                        <Text style={{textAlign: "center"}} >Invite your friends to swipe & match with group of friends going out tonight.</Text>
                        <TouchableOpacity style={styles.button} >
                            <Text style={{color : COLORS.white , fontSize: SIZES.h5 , textAlign: "center"}}>I'M GOING OUT</Text>
                        </TouchableOpacity>
                    </Center>
                </VStack>
            </Center>
        </View>
    )
}

export default Profile