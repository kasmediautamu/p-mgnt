import React from 'react';
import { array, oneOfType, string } from 'prop-types';
import Input from '../Input';

// eslint-disable-next-line react/button-has-type
const CheckBox = (props:any) => <Input type="checkbox" inputclass="form-check-input" {...props} />;
/**
 * checkbox extends input
 */
CheckBox.propTypes = {
  props: oneOfType([array, string]),
};
export default CheckBox;
