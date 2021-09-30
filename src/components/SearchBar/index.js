import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//image
import searchIcone from '../../images/search-icon.svg';
//styles
import { Content, Wrapper } from './SearchBar.styles';



const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {

        if(initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)

        return () => clearTimeout(timer)

    }, [setSearchTerm, state])

    return ( 
        <Wrapper>
            <Content>
                <img src={searchIcone} alt="search-icon" />
                <input
                     type="text" 
                     placeholder='Search Movie'     
                     value={state}
                     onChange={e => setState(e.target.value)}
                />
            </Content>
        </Wrapper>
     );
}
SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}
 
export default SearchBar;