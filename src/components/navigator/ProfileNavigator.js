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
const Stack = createStackNavigator();


function ProfileNavigator({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Edit Profile',
            headerTintColor: COLORS.black,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: SIZES.h4,
            },
            headerBackImage: () =>
              <MaterialIcons name="arrow-back-ios" size={25} color={COLORS.red} /> ,

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}
                onPress={() => {
                  navigation.navigate("AddPhoto");
                }}
              >
                <Feather name="plus" size={25} color={COLORS.grey} />
              </TouchableOpacity>
            )
          }}
          name="EditProfile"
          component={Edit}
        />
        <Stack.Screen
          options={{
            title: 'Add Photo',
            headerTintColor: COLORS.black,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: SIZES.h4,
            },
            headerBackImage: () =>
              <MaterialIcons name="arrow-back-ios" size={25} color={COLORS.red} />
          }}
          name="AddPhoto"
          component={AddPhoto}
        />
        <Stack.Screen
          options={{
            title: 'Current Work',
            headerTintColor: COLORS.black,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: SIZES.h4,
            },
            headerBackImage: () =>
              <MaterialIcons name="arrow-back-ios" size={25} color={COLORS.red} />
          }}
          name="CurrentWork"
          component={CurrentWork}
        />
        <Stack.Screen
          options={{
            title: 'School',
            headerTintColor: COLORS.black,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: SIZES.h4,
            },
            headerBackImage: () =>
              <MaterialIcons name="arrow-back-ios" size={25} color={COLORS.red} />
          }}
          name="School"
          component={School}
        />
      </Stack.Navigator>



  );
}

export default ProfileNavigator;
