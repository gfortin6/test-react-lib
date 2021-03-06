import React from 'react';
import '../../styles/component/header.scss';
export interface HeadingProps {
  level: string;
  text: string;
  cssClass?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  let result;
  switch (props.level) {
    case '1':
      result = <h1 className={props.cssClass}>{props.text}</h1>;
      break;
    case '2':
      result = <h2 className={props.cssClass}>{props.text}</h2>;
      break;
    case '3':
      result = <h3 className={props.cssClass}>{props.text}</h3>;
      break;
    case '4':
      result = <h4 className={props.cssClass}>{props.text}</h4>;
      break;
    case '5':
      result = <h5 className={props.cssClass}>{props.text}</h5>;
      break;
    case '6':
      result = <h6 className={props.cssClass}>{props.text}</h6>;
      break;
    default:
      result = <h1 className={props.cssClass}>{props.text}</h1>;
  }
  return result;
};
export default Heading;
