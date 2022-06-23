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
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.png';
import img4 from '../../assets/img/img4.jpg';

function Start1() {
    return (
      <View style={styles.banner}>
            
            <Text style={styles.title}>Discover interesting people around you</Text>
            <Image source={img1} style={styles.image}/>
      </View>
    );
  }
  function Start2() {
    return (
      <View style={styles.banner}>
            <Text style={styles.title}>Anonymously like or pass on each person</Text>
            <Image source={img2} style={styles.image}/>
      </View>
    );
  }
  function Start3() {
    return (
      <View style={styles.banner}>
            <Text style={styles.title}>When some one likes you back... </Text>
            <Image source={img3} style={styles.image}/>
      </View>
    );
  }
  function Start4() {
    return (
      <View style={styles.banner}>
            <Text style={styles.title}>Chat and get to know your matches</Text>
            <Image source={img4} style={styles.image}/>
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
        <ScrollView
            onScroll={({nativeEvent}) => onChange(nativeEvent)} 
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
        >
            <Start1/>
            <Start2/>
            <Start3/>
            <Start4/>
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
            <Text style={bannerActive == 3 ? styles.dotActive : styles.dot}>
                ●
            </Text>
        </View>
        <TouchableOpacity style={styles.btn_skip} onPress = { () => {navigation.navigate("MyTab");}}>
          <Text style={{color:COLORS.white, fontSize: SIZES.h6}}>LOG IN WITH FACEBOOK</Text>
        </TouchableOpacity>
        <Text style={styles.textFooter} >By signin you agree with our teams of service and privacy</Text>
    </View>
  );
};

export default Start;
