import {StyleSheet} from 'react-native';
import {appColors} from '../../constants/App_Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: appColors.containerBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: appColors.red,
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    color: appColors.gray,
    marginBottom: 4,
  },
  block: {
    width: 300,
    height: 200,
    borderRadius: 20,
    backgroundColor: appColors.white,
    shadowColor: appColors.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    elevation: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 0,
  },
  back: {
    height: 40,
    width: 40,
  },
});
