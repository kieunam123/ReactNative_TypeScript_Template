import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import RoutesNavigatorContainer from './src/navigations/routes.navigation';
import configurationStore from './src/redux/store';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View,TextInput, Alert} from 'react-native';
import Loading from './src/containers/Loading';
import ConfirmGlobal from './src/containers/ConfirmGlobal';
import InformationModal from './src/containers/InformationModal';
import * as Updates from 'expo-updates';
import { isWeb } from './src/helpers/UtilitiesHelper';
import Loading2 from './src/containers/Loading2';
const App = () => {
  if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
  (Text as any).defaultProps.allowFontScaling = false;

  if ((TextInput as any).defaultProps == null)
    (TextInput as any).defaultProps = {};
  (TextInput as any).defaultProps.allowFontScaling = false;
  const [isLoanding, setIsLoading] = useState<boolean>(false);
  React.useEffect(() => {
    checkForUpdate();
    setIsLoading(false);
  }, []);

  const exitApp = () => {
    throw {};
  }

  const checkForUpdate = async() => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (!isWeb() && update.isAvailable) {
        // ... thông báo cho người dùng về bản cập nhật ...
        Alert.alert('Có bản cập nhật mới','Cập nhật ứng dụng bây giờ?',[
          {text: 'Đồng ý', onPress: async() => {
            setIsLoading(true);
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
          }}
        ]);       
      };
    } catch (e) {
      // xử lí lỗi.
      // thường thì sẽ vào đây khi ứng dụng không thể kết nối đến internet.
      Alert.alert('Network Error', 'Không có Internet. Vui lòng kiểm tra kết nối mạng của bạn', [
        { text: 'Reload', onPress: () => { } },
        { text: 'Thoát', onPress: () => {exitApp();} }
      ]);
    }
  }

  const [fontsLoaded] = useFonts({
    RobotoBold: require('./src/assets/fonts/Roboto-Bold.ttf'),
    RobotoBoldItalic: require('./src/assets/fonts/Roboto-BoldItalic.ttf'),
    RobotoItalic: require('./src/assets/fonts/Roboto-Italic.ttf'),
    RobotoMedium: require('./src/assets/fonts/Roboto-Medium.ttf'),
    RobotoMediumItalic: require('./src/assets/fonts/Roboto-MediumItalic.ttf'),
    RobotoRegular: require('./src/assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={configurationStore()}>
        <RoutesNavigatorContainer />
        <InformationModal />
        <Loading2 isVisible={isLoanding} text='Đang cập nhật. Vui lòng chờ giây lát...'/>
        <Loading />
        <ConfirmGlobal />
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})


export default App;

