import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../configs';
import {scaleFactor} from '../helpers/UtilitiesHelper';

const styles = StyleSheet.create({
  drawerStyles: {
    flex: 1,
    width: '70%',
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  contentStyle: {flex: 1},
  sceneContainerStyle: {
    backgroundColor: Colors.TRANSPARENT,
  },
  drawerHeader: {
    minHeight: 170,
  },
  drawerBody: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginVertical: 0,
  },
  drawerFooter: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  rowDrawer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
  },
  drawerItemIcon: {
    marginRight: 20,
    fontSize: 15,
    color: Colors.GRAY,
  },
  drawerItemText: {
    color: Colors.GRAY_LIGHT,
    fontSize: scaleFactor(16),
  },
  appVersion: {
    color: Colors.GRAY_LIGHT,
    fontSize: Sizes.Note,
    alignSelf: 'flex-end',
  },
  drawerSection: {
    borderBottomColor: Colors.BORDER_DARK,
    borderBottomWidth: 0.3,
    paddingBottom: 10,
  },
  sectionTitle: {
    color: Colors.GRAY,
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default styles;
