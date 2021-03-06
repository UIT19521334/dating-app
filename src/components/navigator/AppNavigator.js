import React from "react";
import Start from "../../pages/start/Start";
import MyTab from "./MyTab";
import Detail from "../../pages/detail/Detail";

import Setting from "../../pages/setting/Setting";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS, SIZES } from "../constans/theme";
import ProfileNavigator from "./ProfileNavigator";
import ChatNav from "./ChatNav";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const Stack = createStackNavigator();


function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Start"
          component={Start}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MyTab"
          component={MyTab}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ChatNav"
          component={ChatNav}
        />
        
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ProfileNav"
          component={ProfileNavigator}
        />
        <Stack.Screen
          options={{
            title: 'Settings',
            headerTintColor: COLORS.black,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: SIZES.h4,
            },
            headerBackImage: () =>
              <MaterialIcons name="arrow-back-ios" size={25} color={COLORS.red} />
          }}
          name="Setting"
          component={Setting}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default AppNavigator;
