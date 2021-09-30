import React from 'react';
import PropTypes from 'prop-types';
import { Image, Wrapper } from './Actor.styles';

const Actor = ({name, character, imgurl}) => {
    return ( 
        <Wrapper>
            <Image src={imgurl} alt='actor-thumb' />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
     );
}

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imgurl: PropTypes.string
}
 
export default Actor;