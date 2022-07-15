import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { HStack, Center, VStack, Box } from 'native-base'
import { COLORS, SIZES } from '../../components/constans/theme'
import img from "../../assets/img/img1.jpg"
import Feather from "react-native-vector-icons/Feather"
import styles from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";
const Edit = ({ navigation, route }) => {
  const [currWork, setCurrWork] = React.useState("Word Class Tennis Player");
  const [school, setSchool] = React.useState("JCE, Bangalore");
  const [photo6, setPhoto6] = React.useState();
  const [photo5, setPhoto5] = React.useState();
  // Get work
  const handleCurrWork = () => {
    navigation.navigate("CurrentWork")
  }
  const handleGetWork = async () => {
    let data = await AsyncStorage.getItem("WORK");
    setCurrWork(data);
  }

  // Get School
  const handleSchool = () => {
    navigation.navigate("School")
  }
  const handleGetSchool = async () => {
    let data = await AsyncStorage.getItem("SCHOOL");
    setSchool(data);
  }

  // Get photo
  const handleGetPhoto = async () => {
    let data = await AsyncStorage.getItem("PHOTO");
    setPhoto5(data);
  }

  // handleGoback
  useEffect(() => {
    const update = navigation.addListener('focus', () => {
      handleGetPhoto();
      handleGetWork();
      handleGetSchool();
    });
    return () => {
      update();
    };
  }, []);
  
  const handlePhoto5 = () => {
    if (photo5) {
      setPhoto5()
    } else (
      navigation.navigate("AddPhoto")
    )
  }
  return (
    <View >
      <ScrollView >
        <Center backgroundColor={COLORS.lightGrey} >
          <HStack space={3}>
            <Center>
              <Image source={img} style={styles.image} />
              <TouchableOpacity style={styles.button} >
                <Feather name="x" size={20} color={COLORS.white} />
              </TouchableOpacity>
            </Center>

            <VStack space={2} >
              <Center>
                <Image source={img} style={styles.image1} />
                <TouchableOpacity style={styles.button2} >
                  <Feather name="x" size={20} color={COLORS.white} />
                </TouchableOpacity>
              </Center>
              <Center>
                <Image source={img} style={styles.image1} />
                <TouchableOpacity style={styles.button2} >
                  <Feather name="x" size={20} color={COLORS.white} />
                </TouchableOpacity>
              </Center>
            </VStack>
          </HStack>
          <HStack space={3} >
            <Center>
              <Image source={img} style={styles.image1} />
              <TouchableOpacity style={styles.button2} >
                <Feather name={"x"} size={20} color={COLORS.white} />
              </TouchableOpacity>
            </Center>
            <Center>
              <Image source={{ uri: photo5 }} style={styles.image2} />
              <TouchableOpacity style={styles.button2}
                onPress={() => { handlePhoto5() }}
              >
                <Feather name={photo5 ? "x" : "plus"} size={20} color={COLORS.white} />
              </TouchableOpacity>
            </Center>
            <Center>
              <Image style={styles.image1} />
              <TouchableOpacity style={styles.button2} >
                <Feather name="plus" size={20} color={COLORS.white} />
              </TouchableOpacity>
            </Center>
          </HStack>
        </Center>
        <View style={{ backgroundColor: COLORS.white, marginTop: 20, width: SIZES.width }} >
          <Text style={styles.title1}>About Federer</Text>
          <TextInput
            style={styles.input}
            placeholder='About you...'
            placeholderTextColor={COLORS.grey}
          />
          <Text style={styles.title}>Current Work</Text>
          <TouchableOpacity
            onPress={() => handleCurrWork()}
          >
            <Text style={styles.descButton}>{currWork}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>School</Text>
          <TouchableOpacity
            onPress={() => handleSchool()}
          >
            <Text style={styles.descButton}>{school}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Edit