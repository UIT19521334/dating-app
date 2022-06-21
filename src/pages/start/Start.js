import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { COLORS,SIZES } from "../../components/constans/theme";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "./styles";
// import img1 from '../../assets/img/img1.png';
// import img2 from '../../assets/img/img2.png';
// import img3 from '../../assets/img/img3.png';

function Start1() {
    return (
      <View style={styles.banner}>
            <Image source={img1} style={styles.image}/>
            <Text style={styles.title}>iTodo the To-Do App of the Future.</Text>
            <Text style={styles.title}>Manage Todos easily</Text>
      </View>
    );
  }
  function Start2() {
    return (
      <View style={styles.banner}>
            <Image source={img2} style={styles.image}/>
            <Text style={styles.title}>iTodo the To-Do App of the Future.</Text>
            <Text style={styles.title}>Manage Todos easily</Text>
      </View>
    );
  }
  function Start3() {
    return (
      <View style={styles.banner}>
            <Image source={img3} style={styles.image}/>
            <Text style={styles.title}>iTodo the To-Do App of the Future.</Text>
            <Text style={styles.title}>Manage Todos easily</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();
const Start = ({navigation}) => {
  const [bannerActive, SetBannerActive] = React.useState(0);
  const onChange = (nativeEvent) =>{
    if (nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != bannerActive){
        SetBannerActive(slide);
      }
    }
  }
  return (
      <View>
        {/* <ScrollView
            onScroll={({nativeEvent}) => onChange(nativeEvent)} 
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
               
        >
            <Start1/>
            <Start2/>
            <Start3/>
        </ScrollView>
        
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
        <TouchableOpacity style={styles.btn_skip} onPress = { () => {navigation.navigate("Signin");}}>
          <Text style={{color:COLORS.white, fontSize: SIZES.h6}}>Skip</Text>
        </TouchableOpacity> */}
        <Text>Start</Text>
    </View>
  );
};

export default Start;
