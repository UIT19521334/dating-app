import React from "react";
import Start from "../../pages/start/Start";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import Signin from "../pages/signin/Signin";
// import Signup from "../pages/signup/Signup";
// import Home from "../pages/home/Home";
// import AddTodo from "../pages/addtodo/AddTodo";
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
      </Stack.Navigator>
     </NavigationContainer>

    
  );
}

export default AppNavigator;
