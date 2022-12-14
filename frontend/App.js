import React from 'react';
import { Container, NativeBaseProvider } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

import Header from './layouts/header';
// import Login from './screens/user/login';
// import Personal from './screens/user/register/personal';
import RegisterNav from './navigators/registerNav';
import Main from './navigators/main'
import HomeNav from './navigators/homeNav';
import AccessDenied from './screens/extras/access-denied';
import AuthNav from './navigators/authNav';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import registerNNPushToken from 'native-notify';
import Verification from './screens/user/register/verification';
// import IntroLoading from './screens/extras/IntroLoading2';
import LoadingStart from './screens/extras/loadingPages/loading-start';
import OTP from './screens/user/otp';
import Chat from './screens/chat/chat';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#f7faf7"
  }
}

export default function App() {
  registerNNPushToken(4801, 'OugbPUmRAVMDRi9zFZP5Au');
  return (
    <Provider store={store}>
      <NavigationContainer theme={Theme}>
        <NativeBaseProvider>
          <Header />
          {/* <AuthNav/> */}
          {/* <RegisterNav /> */}
          {/* <Main/> */}
          {/* <AccessDenied/> */}
          {/* <Verification/> */}
          {/* <IntroLoading/> */}
          {/* <OTP/> */}
          <Chat/>
          <Toast />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
