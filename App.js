
import React from "react";
import "react-native-gesture-handler";
import AppNavigator from "./src/components/navigator/AppNavigator";
import { NativeBaseProvider } from "native-base";
import { SSRProvider } from '@react-aria/ssr';
const App = () => {
  // return <MyTab />;
  return (
    <SSRProvider>
      <NativeBaseProvider>
        <AppNavigator />
      </NativeBaseProvider>
    </SSRProvider>
  );
};


export default App;
