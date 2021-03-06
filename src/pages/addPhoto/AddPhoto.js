import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react'
import styles from './styles'
import { COLORS, SIZES } from '../../components/constans/theme'
import { Button, Center, HStack } from 'native-base'
import Entypo from "react-native-vector-icons/Entypo";
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
const AddPhoto = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [photo, setPhoto] = useState();
  const onpenCamera = async () => {
    setIndex(0);
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
    }
    ImagePicker.launchCamera(options, setPhoto);
    //await AsyncStorage.setItem("PHOTO", photo.assets[0].uri);
  }
  const onpenGallery = async () => {
    setIndex(1);
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      maxHeight: 200,
      maxWidth: 200,
    }
    ImagePicker.launchImageLibrary(options, setPhoto);
    
  }
  const handleSave =  async()=>{
    await AsyncStorage.setItem("PHOTO", photo.assets[0].uri);
    navigation.goBack()
  }
  return (
    <View style={{ marginTop: 5, backgroundColor: COLORS.white, height: SIZES.height }} >
      <Center marginTop={5} >
        <TouchableOpacity
          onPress={() => { onpenCamera() }}
        >
          <HStack
            space={2}
            justifyContent="space-between"
            alignItems="center"
            style={{ width: SIZES.width - 40 }}
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
          onPress={() => { onpenGallery() }}
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
          onPress={() => setIndex(2)}
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
      <Center marginTop={4} >
        <Button
          onPress={() => handleSave()}
          colorScheme="secondary"
          width={300}>SAVE</Button>
      </Center>
    </View>
  )
}

export default AddPhoto