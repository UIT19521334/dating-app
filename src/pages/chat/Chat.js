import { View, Text , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import img from "../../assets/img/img2.jpg";
import { Center } from 'native-base';
import styles from './styles';
import { COLORS } from '../../components/constans/theme';
const Chat = ({navigation}) => {
    const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{ flex: 1, paddingTop: tabBarHeight }} >
      <Center>
          <Image source={img} style={styles.image} />
          <Text style={styles.title}  >You have no match yet</Text>
          <TouchableOpacity style={styles.button}
            onPress={()=>{
              navigation.navigate("ChatNav");
            }}
          >
              <Text style={{color: COLORS.white, textAlign: "center"}} >Discover New People</Text>
          </TouchableOpacity>
      </Center>
    </View>
  )
}

export default Chat