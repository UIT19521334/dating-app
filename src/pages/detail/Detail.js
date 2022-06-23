import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack, VStack, Center } from 'native-base';
import DATA from '../../assets/json/girl.json';
import styles from './styles';
import { COLORS, SIZES } from '../../components/constans/theme';
import Photos from '../../components/Instagram/Photos';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const Detail = ({ navigation, route }) => {
    const position = route.params.position;
    // Banner active first
    const [bannerActive, SetBannerActive] = React.useState(0);
    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != bannerActive) {
                SetBannerActive(slide);
            }
        }
    }
    // Banner active second
    const [bannerActive2, SetBannerActive2] = React.useState(0);
    const onChange2 = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != bannerActive) {
                SetBannerActive2(slide);
            }
        }
    }
    // Cout interted
    let numberOfInterested = DATA[position].interests.length;
    return (
        <View>
            <ScrollView>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                >
                    {
                        DATA[position].pictureList.map((item, index) => (
                            <Image key={index} source={{ uri: item }} style={styles.image} />
                        ))
                    }

                </ScrollView>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                    onPress={()=>{
                        navigation.goBack();
                    }}
                >
                    <MaterialIcons
                        style={{
                            padding: 10,
                        }}
                        name="arrow-back-ios"
                        size={25}
                        color={COLORS.red}
                    />
                </TouchableOpacity>
                <View style={styles.wrapDot}>
                    <Text style={bannerActive == 0 ? styles.dotActive : styles.dot}>
                        ●
                    </Text>
                    <Text style={bannerActive == 1 ? styles.dotActive : styles.dot}>
                        ●
                    </Text>
                    <Text style={bannerActive == 2 ? styles.dotActive : styles.dot}>
                        ●
                    </Text>
                </View>

                <Text style={styles.title} >{DATA[position].name}, {DATA[position].age} </Text>
                <Text style={styles.title1} >{DATA[position].job}, {DATA[position].company} </Text>
                <Text style={styles.title2} >{DATA[position].address}</Text>

                <View
                    style={{
                        marginTop: 8,
                        marginBottom: 8,
                        borderWidth: 1,
                        borderBottomColor: COLORS.blue,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <Text style={styles.title1}>
                    {DATA[position].description}
                </Text>
                <View
                    style={{
                        marginTop: 8,
                        marginBottom: 8,
                        borderWidth: 1,
                        borderBottomColor: COLORS.blue,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <HStack space={2} justifyContent="space-between" alignItems="center" >
                    <Text style={styles.title} > 200 Instagram Photos </Text>
                    <HStack marginRight={20} >
                        <Text style={bannerActive2 == 0 ? styles.dotActive2 : styles.dot2}>
                            ●
                        </Text>
                        <Text style={bannerActive2 == 1 ? styles.dotActive2 : styles.dot2}>
                            ●
                        </Text>
                        <Text style={bannerActive2 == 2 ? styles.dotActive2 : styles.dot2}>
                            ●
                        </Text>
                        <Text style={bannerActive2 == 3 ? styles.dotActive2 : styles.dot2}>
                            ●
                        </Text>
                    </HStack>
                </HStack>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange2(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                >
                    <Photos />
                    <Photos />
                    <Photos />
                    <Photos />
                </ScrollView>
                <Text style={styles.title} > {numberOfInterested} Interested </Text>
                <View style={{ paddingBottom: SIZES.height / 10 }}>
                    {
                        DATA[position].interests.map((item, index) => (
                            <Text key={index} style={styles.interestedText} >{item}</Text>
                        ))
                    }
                </View>

            </ScrollView>
            <Center style={styles.groupButton}>
                <HStack space={3} width={SIZES.width / 1.1} justifyContent="space-between" alignItems="center" >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Feather style={[styles.icon, { backgroundColor: COLORS.red }]} name='x' size={50} color={COLORS.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialCommunityIcons style={[styles.icon, { backgroundColor: COLORS.blue }]} name='star' size={50} color={COLORS.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialCommunityIcons style={[styles.icon, { backgroundColor: COLORS.green }]} name='cards-heart' size={50} color={COLORS.white} />
                    </TouchableOpacity>
                </HStack>
            </Center>
        </View>
    )
}

export default Detail