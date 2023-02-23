/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {StyleProp, ViewStyle, StyleSheet, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../configs';

export interface IProps {
  children: React.ReactNode;
  disableStatusBar?: boolean;
  bgColor?: string;
  statusBarBackgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

const SafeView = ({
  children,
  style,
  disableStatusBar,
  bgColor,
  statusBarBackgroundColor,
}: IProps) => {
  return (
    <>
      <SafeAreaView style={[styles.container, {backgroundColor: bgColor}]}>
        <StatusBar
          animated
          barStyle="dark-content"
          backgroundColor={statusBarBackgroundColor}
          hidden={disableStatusBar}
        />
        <View style={[styles.body, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

SafeView.defaultProps = {
  bgColor: Colors.WHITE,
};

export default SafeView;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  body: {flex: 1, backgroundColor: Colors.BG},
});
