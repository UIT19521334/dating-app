import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { COLORS, SIZES } from '../../components/constans/theme'
import { Center, HStack } from 'native-base'
import Entypo from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
const School = ({navigation}) => {
  const [index, setIndex] = useState(0)
  const setSchool=async()=>{
    setIndex(0);
    await AsyncStorage.setItem("SCHOOL","JCE, Bangalore");
    navigation.goBack();
  }
  const setSchool2=async()=>{
    setIndex(1);
    await AsyncStorage.setItem("SCHOOL","JCE, Bangalore2");
    navigation.goBack();
  }
  const setSchool3=async()=>{
    setIndex(2);
    await AsyncStorage.setItem("SCHOOL","JCE, Bangalore3");
    navigation.goBack();
  }
  const setSchool4=async()=>{
    setIndex(3);
    await AsyncStorage.setItem("SCHOOL","JCE, Bangalore4");
    navigation.goBack();
  }
  const setSchoolNone=async()=>{
    setIndex(4);
    await AsyncStorage.setItem("SCHOOL","None");
    navigation.goBack();
  }
  return (
    <View style={{ marginTop: 5, backgroundColor: COLORS.white, height: SIZES.height }} >
      <Center marginTop={5}>
        <TouchableOpacity
          onPress={()=> setSchool()}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            width={SIZES.width - 40}
            padding={4}
          >
            <Text style={styles.title} >JCE, Bangalore</Text>
            <Entypo name='check' size={25} color={index == 0 ? COLORS.red : COLORS.white} />
          </HStack>
          
        </TouchableOpacity>
        <View
            style={{
              width: SIZES.width - 30,
              marginBottom: 8,
              marginLeft: 30,
              borderWidth: 2,
              borderColor: COLORS.lightGrey,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        <TouchableOpacity
          onPress={()=> setSchool2()}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            width={SIZES.width - 40}
            padding={4}
          >
            <Text style={styles.title} >JCE, Bangalore2</Text>
            <Entypo name='check' size={25} color={index == 1 ? COLORS.red : COLORS.white} />
          </HStack>
          
        </TouchableOpacity>
        <View
            style={{
              width: SIZES.width - 30,
              marginBottom: 8,
              marginLeft: 30,
              borderWidth: 2,
              borderColor: COLORS.lightGrey,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        <TouchableOpacity
          onPress={()=> setSchool3()}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            width={SIZES.width - 40}
            padding={4}
          >
            <Text style={styles.title} >JCE, Bangalore3</Text>
            <Entypo name='check' size={25} color={index == 2 ? COLORS.red : COLORS.white} />
          </HStack>
          
        </TouchableOpacity>
        <View
            style={{
              width: SIZES.width - 30,
              marginBottom: 8,
              marginLeft: 30,
              borderWidth: 2,
              borderColor: COLORS.lightGrey,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        <TouchableOpacity
          onPress={()=> setSchool4()}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            width={SIZES.width - 40}
            padding={4}
          >
            <Text style={styles.title} >JCE, Bangalore4</Text>
            <Entypo name='check' size={25} color={index == 3 ? COLORS.red : COLORS.white} />
          </HStack>
        </TouchableOpacity>
        <Center style={{backgroundColor: COLORS.lightGrey, width: SIZES.width}}>
            <Text style={styles.notification}>
                If your current job isn't show, please update it on facebook and it will
                appear here. If you are looking for a new job, work at Tinder.
            </Text>
        </Center>
        <TouchableOpacity
          onPress={()=> setSchoolNone()}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            width={SIZES.width - 40}
            padding={4}
          >
            <Text style={styles.title} >None</Text>
            <Entypo name='check' size={25} color={index == 4 ? COLORS.red : COLORS.white} />
          </HStack>
          
        </TouchableOpacity>
        <View
            style={{
              width: SIZES.width - 30,
              marginBottom: 8,
              marginLeft: 30,
              borderWidth: 2,
              borderColor: COLORS.lightGrey,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
      </Center>
    </View>
  )
}

export default School