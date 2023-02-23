import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import fonts from '../../configs/fonts';
import {StyleConfig, Sizes, Colors} from '../../configs';
import Color from '../../configs/colors';
import {scaleFactor} from '../../helpers/UtilitiesHelper';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const STATUS_BAR_HEIGHT = StatusBar.currentHeight ?? 20;

const styles = StyleSheet.create({
  title: {
    color: Colors.GRAY_LIGHT,
    fontSize: 15,
    textTransform: 'capitalize',
  },
  rowLine: {
    borderBottomColor: Colors.GRAY_LIGHT,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
  },

  iconCommon: {},
  textStyle: {
    fontFamily: fonts.RobotoRegular,
    fontSize: scaleFactor(Sizes.Title),
    color: Colors.GRAY,
  },
  textBold: {
    fontFamily: fonts.RobotoBold,
    fontWeight: 'bold',
  },
  textItalic: {
    fontFamily: fonts.RobotoItalic,
  },
  tagButtonContainer: {
    borderWidth: StyleConfig.BORDER.WIDTH,
    borderRadius: 30,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: StyleConfig.PADDING_CONTENT_VERTICAL,
    backgroundColor: Colors.WHITE,
    marginHorizontal: 10,
  },
  tagButtonText: {
    fontSize: Sizes.Note,
    color: Colors.GRAY,
  },
  tagButtonActive: {
    borderColor: Colors.ORIGIN,
    backgroundColor: Colors.ORIGIN,
  },
  tagButtonTextActive: {
    color: Colors.WHITE,
    fontSize: Sizes.Note,
    fontWeight: 'bold',
  },
  // Modal
  backdropModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHead: {
    backgroundColor: Colors.ORIGIN,
    justifyContent: 'space-between',
    paddingVertical: StyleConfig.PADDING_VERTICAL,
    paddingHorizontal: StyleConfig.PADDING_CONTENT_HORIZONTAL,
    flexDirection: 'row',
  },
  modalTitle: {
    color: Colors.WHITE,
    fontSize: Sizes.Title,
  },
  modalCloseButton: {},
  modalCloseIcon: {
    color: Colors.WHITE,
    fontSize: Sizes.Icon,
  },
  modalBody: {
    backgroundColor: Colors.WHITE,
    paddingVertical: StyleConfig.PADDING_VERTICAL,
    paddingHorizontal: StyleConfig.PADDING_HORIZONTAL,
  },
  modalSearchBox: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  modalSearch: {
    flex: 1,
    zIndex: 1,
    paddingVertical: scaleFactor(10),
  },
  modalSearchButton: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modalSearchIcon: {
    fontSize: Sizes.Icon,
    color: Colors.GRAY_LIGHT,
  },
  // Form: input, date
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  inputTitle: {
    color: Color.ORIGIN,
    fontSize: Sizes.Note,
  },
  inputContent: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.BORDER_DARK,
    padding: 0,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputForm: {
    paddingVertical: 10,
    // paddingHorizontal: 10,
    marginBottom: -10,
    margin: 0,
    fontFamily: fonts.RobotoRegular,
    fontSize: Sizes.Content,
    color: Colors.GRAY,
    flex: 1,
  },
  inputPlaceholder: {
    color: Colors.GRAY_LIGHT,
    fontSize: Sizes.Note,
  },
  inputCalendarIcon: {
    fontSize: Sizes.IconSub,
    color: Colors.GRAY_LIGHT,
  },
  errorMessage: {
    color: Colors.DANGER,
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 5,
  },
  // Button
  button: {
    backgroundColor: Colors.ORIGIN,
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: StyleConfig.CARD.ELEVATION,
    borderWidth: StyleConfig.BORDER.WIDTH,
    borderColor: Colors.WHITE,
    flexDirection: 'row',
  },
  buttonOutline: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleConfig.BORDER.WIDTH,
    // elevation: StyleConfig.CARD.ELEVATION,
    borderColor: Colors.ORIGIN,
    flexDirection: 'row',
    width: '100%',
  },
  buttonTitle: {
    color: Colors.WHITE,
    paddingHorizontal: 10,
  },
  buttonTitleOutline: {
    color: Colors.ORIGIN,
    paddingHorizontal: 10,
  },
  buttonLeftIcon: {
    color: Colors.WHITE,
    fontSize: Sizes.Title,
    marginRight: 10,
  },
  buttonLeftIconOutline: {
    color: Colors.ORIGIN,
    marginRight: 10,
    fontSize: Sizes.Title,
  },
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: Colors.WHITE,
    elevation: StyleConfig.CARD.ELEVATION,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.1,
    shadowColor: Colors.SHADOW,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderColor: Colors.WHITE,
  },
  circleButtonIcon: {
    fontSize: Sizes.Icon,
  },
  // Modal
  viewModalBackDrop: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  closeModalBottom: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  modalBottomHeader: {
    height: 60,
    backgroundColor: Colors.ORIGIN,
    borderBottomColor: Colors.BORDER_DARK,
    borderBottomWidth: 0.5,
    elevation: 0.2,
    paddingVertical: StyleConfig.PADDING_CONTENT_VERTICAL,
    paddingHorizontal: StyleConfig.PADDING_CONTENT_HORIZONTAL,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalBottomHeaderTitle: {
    color: Colors.WHITE,
    textTransform: 'capitalize',
    fontSize: scaleFactor(Sizes.Title),
  },
  bottomModalContent: {
    backgroundColor: Colors.WHITE,
    paddingTop: 10,
    zIndex: 1,
    position: 'relative',
    minHeight: SCREEN_HEIGHT * 0.5,
    maxHeight: SCREEN_HEIGHT - STATUS_BAR_HEIGHT - 50,
    paddingHorizontal: StyleConfig.PADDING_HORIZONTAL,
  },
  modalContentRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.GRAY_LIGHT,
    paddingRight: 40,
  },
  modalContentColumn: {
    flex: 1,
  },
  // Accordion
  accordionContainer: {
    marginVertical: 10,
    borderWidth: 0.2,
    borderColor: Colors.BORDER_DARK,
    backgroundColor: Colors.WHITE,
    position: 'relative',
    overflow: 'hidden',
  },
  accordionHeader: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordionIcon: {
    color: Colors.GRAY,
    marginRight: 10,
    fontWeight: 'bold',
  },
  accordionTitle: {
    color: Colors.GRAY,
  },
  accordionBody: {
    padding: 10,
    width: '100%',
  },
  // Radio
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Colors.BORDER_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    backgroundColor: Colors.BORDER_DARK,
  },
});

export default styles;
