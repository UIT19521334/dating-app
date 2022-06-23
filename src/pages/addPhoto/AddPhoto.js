import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { COLORS, SIZES } from '../../components/constans/theme'
import { Center, HStack } from 'native-base'
import Entypo from "react-native-vector-icons/Entypo";
const AddPhoto = () => {
  const [index, setIndex] = useState(0)
  return (
    <View style={{ marginTop: 5, backgroundColor: COLORS.white, height: SIZES.height }} >
      <Center marginTop={5} >
        <TouchableOpacity
          
          onPress={()=> setIndex(0)}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            style={{width: SIZES.width - 40}}
            padding={4}
          >
            <Text style={styles.title} >Camera</Text>
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
          onPress={()=> setIndex(1)}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            width={SIZES.width - 40}
            padding={4}
          >
            <Text style={styles.title} >Gallery</Text>
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
          onPress={()=> setIndex(2)}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            width={SIZES.width - 40}
            padding={4}
          >
            <Text style={styles.title} >Google Drive</Text>
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
      </Center>
    </View>
  )
}

export default AddPhoto