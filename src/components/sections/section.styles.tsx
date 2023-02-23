import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../configs';
import fonts from '../../configs/fonts';
import {scaleFactor, verticalScale} from '../../helpers/UtilitiesHelper';

const styles = StyleSheet.create({
  container: {
    height: scaleFactor(Sizes.HEADER_HEIGHT),
    backgroundColor: Colors.WHITE,
    elevation: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: Sizes.Icon,
    color: Colors.GRAY_LIGHT,
    padding: 10
  },
  menuIcon: {
    fontSize: Sizes.Icon,
    color: Colors.GRAY_LIGHT,
    padding:10
  },

  rowContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  rowLabelIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rowLabelIconStyle: {
    fontSize: Sizes.Title,
    marginRight: 10,
    color: Colors.GRAY_LIGHT,
  },
  containerStyle: {
    paddingHorizontal: 15,
    flex: 1,
  },
  searchBoxContainer: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: Sizes.SEARCH_BOX_MARGIN,
    borderColor: Colors.GRAY_LIGHT,
    backgroundColor: Colors.WHITE,
    elevation: 2,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignContent: 'center',
  },
  searchBoxInput: {
    fontFamily: fonts.RobotoRegular,
    color: Colors.GRAY_LIGHT,
    fontSize: Sizes.Content,
    paddingHorizontal: scaleFactor(15),
    paddingRight: scaleFactor(50),
    paddingVertical: verticalScale(10),
  },
  searchBoxBtn: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: scaleFactor(10),
    justifyContent: 'center',
    alignSelf: 'flex-end',
    padding:10
  },
  searchBoxIcon: {
    fontSize: Sizes.Title,
    color: Colors.GRAY_LIGHT,
  },
  // Wizard
  wizardContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wizardCircle: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: Colors.GRAY_LIGHT,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 5,
    elevation: 5,
  },
  wizardActive: {
    borderColor: Colors.ORIGIN,
  },
  wizardLine: {
    width: 30,
    height: 4,
    borderRadius: 10,
    backgroundColor: Colors.GRAY_LIGHT,
    borderColor: Colors.GRAY_LIGHT,
    borderWidth: 1,
  },
});

export default styles;
