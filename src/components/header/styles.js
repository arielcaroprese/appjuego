/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import { colors } from './../../constants/theme';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    height: 48,
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Rubik-Medium',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default styles;
