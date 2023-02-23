import React from 'react';
import {
  View,
  StatusBar,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextCustom, Icon} from '../components/commons';
import {Colors} from '../configs';
import GlobalActions from '../redux/global/global.actions';
import {RootState} from '../redux/reducers';

const styles = StyleSheet.create({
  backdropModal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 20,
    position: 'relative',
    borderRadius: 5,
    borderColor: Colors.WHITE,
    borderWidth: 1,
  },
  iconWrap: {
    backgroundColor: '#6FC34B',
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -50,
    bottom: 0,
    elevation: 5,
    borderColor: Colors.WHITE,
    borderWidth: 1,
  },
  icon: {
    color: Colors.WHITE,
    fontSize: 50,
  },
  mainButton: {
    backgroundColor: '#6FC34B',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    elevation: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  textContent: {
    textAlign: 'center',
    color: Colors.GRAY_LIGHT,
    marginBottom: 30,
  },
  textButton: {
    color: Colors.WHITE,
    fontSize: 20,
  },
});

const InformationModal = () => {
  // close  check
  const dispatch = useDispatch();
  const {modalInfo} = useSelector((state: RootState) => state.global);
  const [bgColor, setBgColor] = React.useState<string>(Colors.SUCCESS);
  const [iconName, setIconName] = React.useState<string>('check');
  const [title, setTitle] = React.useState<string>('Thành Công');

  React.useEffect(() => {
    switch (modalInfo.modalType) {
      case 'ERROR': {
        setBgColor(Colors.DANGER);
        setIconName('close');
        setTitle('Lỗi');
        break;
      }
      case 'INFO': {
        setBgColor(Colors.SUCCESS);
        setIconName('check');
        setTitle('Thành Công');
        break;
      }
      default: {
        setBgColor(Colors.ORIGIN);
        setIconName('warning');
        setTitle('Cảnh Báo');
        break;
      }
    }
  }, [modalInfo, modalInfo.modalType]);

  return (
    <Modal transparent visible={modalInfo.isOpen}>
      <StatusBar backgroundColor="rgba(0,0,0,0.4)" />
      <View style={styles.backdropModal}>
        <View style={styles.content}>
          <View style={[styles.iconWrap, {backgroundColor: bgColor}]}>
            <Icon name={iconName} type="AntDesign" style={[styles.icon]} />
          </View>
          <TextCustom style={styles.title}>{title}</TextCustom>
          <TextCustom style={styles.textContent}>
            {modalInfo.message}
          </TextCustom>
          <TouchableOpacity
            style={[styles.mainButton, {backgroundColor: bgColor}]}
            onPress={() => dispatch(GlobalActions.closeErrorInfoModal())}>
            <TextCustom style={styles.textButton}>Đóng</TextCustom>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InformationModal;
