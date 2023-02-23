import React from 'react';
import {Modal, View, Pressable, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './common.styles';
import TextCustom from './TextCustom';

export interface IModalCommonProps {
  title: string;
  children: React.ReactNode;
  isVisible: boolean;
  onClose?(): void;
}

const ModalCommon: React.FC<IModalCommonProps> = (props): JSX.Element => {
  return (
    <Modal animationType="none" transparent visible={props?.isVisible}>
      <StatusBar backgroundColor="rgba(0,0,0,0.4)" />
      <View style={styles.backdropModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHead}>
            <TextCustom bold style={styles.modalTitle}>
              {props?.title}
            </TextCustom>
            <Pressable onPress={() => props?.onClose && props.onClose()}>
              <View style={styles.modalCloseButton}>
                <AntDesign name="close" style={styles.modalCloseIcon} />
              </View>
            </Pressable>
          </View>
          <View style={styles.modalBody}>{props?.children}</View>
        </View>
      </View>
    </Modal>
  );
};

ModalCommon.defaultProps = {
  isVisible: false,
};

export default ModalCommon;
