
import React from "react";
import "react-native-gesture-handler";
import AppNavigator from "./src/components/navigator/AppNavigator";
import { NativeBaseProvider } from "native-base";
const App = () => {
  // return <MyTab />;
  return (
    <NativeBaseProvider>
      <AppNavigator/>
   </NativeBaseProvider>
  );
};


export default App;
