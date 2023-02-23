import React from 'react';
import {View, Pressable} from 'react-native';

import {useNavigation, DrawerActions} from '@react-navigation/native';
import styles from './section.styles';
import {TextCustom, Icon} from '../commons';
import {Colors, Sizes} from '../../configs';
import {scaleFactor} from '../../helpers/UtilitiesHelper';
import Search from '../commons/Search';

export interface IHeaderProps {
  onMenuPress?(): void;
  title: string;
  isMenu: boolean;
  noShadow?: boolean;
  isBluetoothIcon?: boolean;
  bluetoothName?: string;
  placeholder?: string;
  enableSearch?: boolean;
  disableThreeDot?: boolean;
  component?: React.ReactNode;
  currentScreenOff?: boolean;
  onBackPress?(): void;
}

const Header: React.FC<IHeaderProps> = ({
  title,
  isMenu,
  noShadow,
  onMenuPress,
  onBackPress,
  isBluetoothIcon,
  bluetoothName,
  placeholder,
  enableSearch,
  disableThreeDot,
  component,
  currentScreenOff
}) => {
  const navigate = useNavigation();
  const handleLeftPress = (): void => {
    if (!isMenu) return navigate.goBack();
    return navigate.dispatch(DrawerActions.openDrawer());
  };

  const shadowValue = noShadow ? 0 : 10;

  return (
    <View style={[styles.container, {elevation: shadowValue}]}>
      <Pressable onPress={isMenu ? handleLeftPress : (currentScreenOff ? onBackPress : handleLeftPress)}>
        <Icon
          name={isMenu ? 'menufold' : 'arrowleft'}
          style={styles.backIcon}
          type="AntDesign"
        />
      </Pressable>
      {!component && (
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {!enableSearch && (
            <TextCustom bold style={{textAlign: 'center', flex: 1}}>
              {title}
            </TextCustom>
          )}
          {enableSearch && (
            <Search
              title={title}
              placeholder={placeholder}
              enableSearch={enableSearch}
            />
          )}
        </View>
      )}
      {component && (
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {component}
        </View>
      )}
      <Pressable onPress={onMenuPress}>
        <>
          {isBluetoothIcon && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: scaleFactor(0.5),
                backgroundColor: Colors.ORIGIN,
                borderColor: Colors.WHITE,
                paddingHorizontal: scaleFactor(5),
                borderRadius: scaleFactor(20),
              }}>
              <Icon
                type="MaterialIcons"
                name="bluetooth"
                style={{...styles.menuIcon, fontSize: 20, color: Colors.WHITE}}
              />
              <TextCustom style={{fontSize: Sizes.Note, color: Colors.WHITE}}>
                {bluetoothName}
              </TextCustom>
            </View>
          )}
          {!disableThreeDot && (
            <Icon type="AntDesign" name="filter" style={styles.menuIcon} />
          )}
        </>
      </Pressable>
    </View>
  );
};

Header.defaultProps = {
  noShadow: true,
};

export default Header;
