import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../components/constans/theme'
import DATA from "../../assets/json/girl.json"
import { HStack, VStack } from 'native-base'
import styles from './styles'
const Match = ({navigation}) => {

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, marginTop: 4 }} >
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={()=>{
                navigation.navigate("MatchDetail",{
                  title: item.name,
                  girl: item
                })
              }}
            >
              <HStack padding={2} space={2} alignItems="center">
                <Image source={{ uri: item.fistImage }} style={styles.image} />
                <VStack space={2} >
                  <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>{item.address}</Text>
                  </View>
                  <View
                    style={{
                      marginTop: 8,
                      marginBottom: 8,
                      borderWidth: 1,
                      width: SIZES.width,
                      borderBottomColor: COLORS.grey,
                      borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                  />
                </VStack>
              </HStack>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
}

export default Match