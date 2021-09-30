import React from 'react';
import PropTypes from 'prop-types';
//styles
import { Content, Text, Wrapper } from './HeroImage.styles';


const HeroImage = ({image, title, text}) => {

    return ( 
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
     );
}

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}
 
export default HeroImage;