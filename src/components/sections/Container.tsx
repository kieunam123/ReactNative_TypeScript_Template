import React, {useState} from 'react';
import {View, ViewProps} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './section.styles';

export interface IContainerProps extends ViewProps {
  bgColor?: string;
  children: React.ReactNode;
  isIncludeScrollView?: boolean;
}

export interface IViewLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Container: React.FC<IContainerProps> = ({
  bgColor,
  children,
  isIncludeScrollView,
  style,
}) => {
  const bgStyle = bgColor ? {backgroundColor: bgColor} : undefined;
  const [, setLayout] = useState<IViewLayout>();

  return (
    <View
      style={[styles.containerStyle, bgStyle, style]}
      onLayout={(event) => {
        const {x, y, width, height} = event.nativeEvent.layout;
        setLayout({y, x, width, height});
      }}>
      {isIncludeScrollView ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={(evt) => {
            const {contentOffset} = evt.nativeEvent;
            const {y} = contentOffset;
          }}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  );
};

Container.defaultProps = {
  isIncludeScrollView: false,
};

export default Container;
