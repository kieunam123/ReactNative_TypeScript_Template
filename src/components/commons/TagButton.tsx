import React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import styles from './common.styles';
import TextCustom from './TextCustom';

export interface ITagButtonProps {
  text: string;
  isActive?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
}

const TagButton: React.FC<ITagButtonProps> = (props) => {
  return (
    <Pressable onPress={props?.onPress}>
      <View
        style={[
          styles.tagButtonContainer,
          props?.isActive ? styles.tagButtonActive : null,
          props?.style,
        ]}>
        <TextCustom
          style={
            props?.isActive ? styles.tagButtonTextActive : styles.tagButtonText
          }>
          {props?.text}
        </TextCustom>
      </View>
    </Pressable>
  );
};

export default TagButton;
