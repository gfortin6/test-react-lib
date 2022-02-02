import React from 'react';
import './Button.css';
interface ButtonProps{
  label:string
}

export const Button = (props:ButtonProps)=>{
  return <button>{props.label}</button>;
}
// export default Button;