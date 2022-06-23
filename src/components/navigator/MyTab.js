import React from "react";
import { View } from "react-native";
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/Entypo";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, SIZES } from "../constans/theme";
import Home from "../../pages/home/Home";
import Chat from "../../pages/chat/Chat";
import Profile from "../../pages/profile/Profile";
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={
        {
          tabBarStyle: {
            position: 'absolute',
            top: 0, left: 0,
            width: SIZES.width
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.red,
        }
      }
    >
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "Meet Up",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTab;
