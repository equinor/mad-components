import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import * as colors from '../stylesheets/colors';

const Button = ({
  onPress,
  text,
  active,
  testID,
}) => (
  <TouchableOpacity
    testID={testID}
    disabled={!active}
    onPress={onPress}
    style={{
      backgroundColor: active ? colors.MOSS_GREEN_100 : '#EAEAEA',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      height: 48,
      padding: 6,
      borderWidth: 1,
      borderColor: active ? colors.MOSS_GREEN_100 : 'gray',
    }}
  >
    <Text
      style={{
        color: active ? '#FFFFFF' : '#6F6F6F',
        fontWeight: '500',
        fontSize: 16,
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  active: PropTypes.bool,
  testID: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => null,
  text: '',
  active: true,
  testID: '',
};

export default Button;
