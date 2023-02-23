import React from 'react';
import {
  View,
  ViewStyle,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './common.styles';
import Icon from './Icon';
import {Colors} from '../../configs';
import TextCustom from './TextCustom';

export interface IModalBottomProps {
  isVisible: boolean;
  children: React.ReactNode;
  title?: string;
  onClose?(): void;
  style?: ViewStyle;
  searchPlaceholder?: string;
  onSearch?: (text: string) => void;
}

const ModalBottom: React.FC<IModalBottomProps> = ({
  isVisible,
  children,
  style,
  title,
  onClose,
  searchPlaceholder,
  onSearch,
}) => {
  return (
    <Modal
      testID="modal"
      isVisible={isVisible}
      style={styles.viewModalBackDrop}>
      <View style={styles.modalBottomHeader}>
        {title && (
          <TextCustom style={styles.modalBottomHeaderTitle} bold>
            {title}
          </TextCustom>
        )}
        {onSearch && searchPlaceholder && (
          <View style={styles.modalSearchBox}>
            <TextInput
              placeholder={searchPlaceholder}
              style={styles.modalSearch}
              onChangeText={onSearch}
            />
            <Pressable style={styles.modalSearchButton}>
              <AntDesign name="search1" style={styles.modalSearchIcon} />
            </Pressable>
          </View>
        )}
        <TouchableWithoutFeedback onPress={(): void => onClose && onClose()}>
          <View style={styles.closeModalBottom}>
            <Icon name="close" type="AntDesign" color={Colors.WHITE} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={[styles.bottomModalContent, {...style}]}>{children}</View>
    </Modal>
  );
};

export default ModalBottom;
