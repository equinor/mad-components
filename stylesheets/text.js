import { StyleSheet } from 'react-native';
import * as colors from './colors';

export default StyleSheet.create({
  h1: {
    color: colors.PRIMARY_ACCENT,
    fontSize: 32,
    lineHeight: 48,
  },
  h3: {
    color: colors.PRIMARY_ACCENT,
    fontSize: 24,
    lineHeight: 40,
  },
  h4: {
    color: colors.PRIMARY_ACCENT,
    fontSize: 18,
    lineHeight: 32,
  },
  p: {
    color: colors.PRIMARY_ACCENT,
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 1,
    paddingBottom: 6,
  },
  highlighted: {
    color: colors.PRIMARY_100,
    fontWeight: '500',
  },
});
