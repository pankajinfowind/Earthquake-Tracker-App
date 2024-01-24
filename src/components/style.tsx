import {StyleSheet} from 'react-native';
import {appColors} from '../constants/App_Constants';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: appColors.white,
    borderRadius: 10,
    margin: 10,
    padding: 16,
    shadowColor: appColors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: appColors.gray,
  },
  subtitle: {
    fontSize: 14,
    color: appColors.gray,
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    color: appColors.gray,
    marginBottom: 4,
  },
  date: {
    position: 'absolute',
    justifyContent: 'flex-end',
    right: 15,
    top: 8,
    fontWeight: 'bold',
  },
});
