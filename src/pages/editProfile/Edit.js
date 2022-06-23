import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { HStack, Center, VStack, Box } from 'native-base'
import { COLORS, SIZES } from '../../components/constans/theme'
import img from "../../assets/img/img1.jpg"
import Feather from "react-native-vector-icons/Feather"
import styles from './styles'
const Edit = ({navigation, route}) => {
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
                <Feather name="x" size={20} color={COLORS.white} />
              </TouchableOpacity>
            </Center>
            <Center>
              <Image style={styles.image2} />
              <TouchableOpacity style={styles.button2} >
                <Feather name="plus" size={20} color={COLORS.white} />
              </TouchableOpacity>
            </Center>
            <Center>
              <Image  style={styles.image1} />
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
            onPress={() =>{navigation.navigate("CurrentWork")}}
          >
              <Text style={styles.descButton}>Word Class Tennis Player</Text>
          </TouchableOpacity>
          <Text style={styles.title}>School</Text>
          <TouchableOpacity 
            onPress={() =>{navigation.navigate("School")}}
          >
              <Text style={styles.descButton}>JCE, Bangalore</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Edit