import React, { useCallback, useEffect, useState } from 'react';
import { View, Pressable, Dimensions, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../navigation.style';
import { Container, Row } from '../../components/sections';
import { Accordion, Icon, SafeView, TextCustom } from '../../components/commons';
import DrawerHeader from './drawer.header';
import { RootState } from '../../redux/reducers';
import ScreenType from '../screen.constant';
import { navigate } from '../../navigations/navigation.services';
import { Colors } from '../../configs';
import GlobalActions from '../../redux/global/global.actions';
import MasterActions from '~/redux/master/master.actions';
import { FROM_DATE, TO_DATE } from './../../configs/initializeVariable';

const AppDrawer = (): JSX.Element => {
	const dispatch = useDispatch();
	const {
		userParams: { deptId, email, userId, regionId },
	} = useSelector((state: RootState) => state.global);

	const gotoFeature = (
		screenType: string,
		drawerId?: number,
		drawerTitle?: string,
	): void => {
		const nav = screenType;
		dispatch(
			GlobalActions.setCurrentDrawer(
				nav,
				drawerId ?? -1,
				drawerTitle ?? '',
				false,
			),
		);
		navigate(nav);
	};

	return (
		<SafeView
			disableStatusBar={false}
			style={styles.drawerBody}>
				<DrawerHeader/>
				<View style={styles.drawerHeader}>
					<ScrollView style={{flex:1}}>
						<Container isIncludeScrollView={false}>
							<Accordion
								headerStyle={stylesLocal.headerStyle}
								style={stylesLocal.accordionContainer}
								title="Danh mục"
								isOpen
								showIcon={false}>

									<Pressable
										style={styles.rowDrawer}
										onPress={()=>gotoFeature(ScreenType.Main.Dashboard)}>
											<Row>
												<Icon
													name="home"
													type="Entypo"
													style={styles.drawerItemIcon}
												/>
												<TextCustom style={styles.drawerItemText}>Trang chủ</TextCustom>
											</Row>
									</Pressable>
								
							</Accordion>
						</Container>
					</ScrollView>
				</View>
		</SafeView>
	)
}

export default AppDrawer;

const stylesLocal = StyleSheet.create({
	accordionContainer: {
	  // backgroundColor: Colors.WHITE,
	  marginHorizontal: -5,
	  marginVertical: 0,
	  marginBottom: 5,
	  // borderWidth: 0.5,
	  // borderColor: Colors.BORDER_TWO,
	  backgroundColor: Colors.TRANSPARENT,
	},
	headerStyle: {
	  // backgroundColor: Colors.BG_SECOND,
	},
 });