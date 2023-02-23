import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import DrawerNavigation from './drawers/drawer.navigation';
import { isMountedRef, navigationRef } from './navigation.services';
import ScreenType from './screen.constant';
import { RootState } from '../redux/reducers';

import {
	StartScreen,
	DashboardScreen,
} from '../screens/mains';

const Stack = createStackNavigator();

const RoutesNavigatorContainer = (): any => {
	React.useEffect(() => {
		isMountedRef!.current = true;
		return () => (isMountedRef.current = false);
	}, []);

	return (
		<SafeAreaProvider>
			<NavigationContainer ref={navigationRef}>
				<Stack.Navigator
					initialRouteName={ScreenType.Main.Start}
					screenOptions={{
						headerShown: false
					}}>
						<Stack.Screen name={ScreenType.Main.Start} component={StartScreen}/>
						<Stack.Screen name={ScreenType.Main.Dashboard} component={DashboardScreen}/>

				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default RoutesNavigatorContainer;