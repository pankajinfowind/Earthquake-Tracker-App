import {StyleSheet} from 'react-native';
import {appColors} from '../../constants/App_Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.containerBG,
  },
  heading: {
    alignSelf: 'center',
    color: appColors.black,
    marginTop: '5%',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
