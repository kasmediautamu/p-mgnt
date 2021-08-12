import React from 'react';
import { func, string } from 'prop-types';

interface IProps {
  type: any
  inputclass: string
  onChange:any
  title:any
  name:string

}
const Input:React.FC<IProps> = (props) =>{
  const { type, inputclass, onChange, title, name } = props
  return (

      <input className={`${inputclass}`} type={type} placeholder={title} name={name} onChange={onChange} />

  )
}
/**
 * input takes in a type,name,or title which is the placeholder
 */
Input.propTypes = {
  type: string.isRequired,
  name: string.isRequired,
  title: string,
  inputclass: string.isRequired,
  onChange: func.isRequired
};

export default Input;
