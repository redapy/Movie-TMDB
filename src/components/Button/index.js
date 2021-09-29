import React from 'react';
//styles
import { Wrapper } from './Button.styles';


const Button = ({text, callBack}) => {
    return ( 
        <Wrapper type='button' onClick={callBack}>{text}</Wrapper>
     );
}
 
export default Button;