import React from "react";
import Edit from "../../pages/editProfile/Edit";
import AddPhoto from "../../pages/addPhoto/AddPhoto";
import CurrentWork from "../../pages/currentWork/CurrentWork";
import School from "../../pages/school/School";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, SIZES } from "../constans/theme";
import { TouchableOpacity, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Match from "../../pages/match/Match";
import MatchDetail from "../../pages/matchDetail/MatchDetail";
const Stack = createStackNavigator();


function ChatNav({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Matches',
            headerTitleAlign: 'center',
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontSize: SIZES.h4,
            },
            headerBackTitleVisible: false,
            headerBackImage: () =>
              <MaterialIcons name="arrow-back-ios" size={25} color={COLORS.red} />
              
          }}
          name="Match"
          component={Match}
        />
        <Stack.Screen
          options={{
            title: 'MatchesDetail',
            headerTintColor: COLORS.black,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: SIZES.h4,
            },
            headerBackImage: () =>
              <MaterialIcons name="arrow-back-ios" size={25} color={COLORS.red} />
          }}
          name="MatchDetail"
          component={MatchDetail}
        />
      </Stack.Navigator>



  );
}

export default ChatNav;
