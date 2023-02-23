/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {View, StyleSheet, Image, StyleProp, ViewStyle} from 'react-native';
import imgs from '../../assets/imgs';

import {Colors} from '../../configs';
import TextCustom from './TextCustom';

export interface IProps {
  style?: StyleProp<ViewStyle>;
}

const NotFound = ({style}: IProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={imgs.empty} style={styles.img} />
      <TextCustom style={styles.text}>
        Không tìm thấy dữ liệu với thông tin tìm kiếm.
      </TextCustom>
    </View>
  );
};

export default NotFound;
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', marginTop: 100},
  img: {
    width: 100,
    height: 100,
    tintColor: Colors.GRAY_LIGHT,
  },
  text: {marginTop: 10, fontSize: 14, color: Colors.GRAY_LIGHT},
});
