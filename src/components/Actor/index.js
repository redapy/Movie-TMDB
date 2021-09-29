import React from 'react';
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
 
export default Actor;