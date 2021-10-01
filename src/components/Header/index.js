import React, {useContext}  from 'react';
import { Link } from 'react-router-dom';
//images
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg'
//styles
import { Content, LogoImg, TMDBLogoImg, Wrapper } from './Header.styles';
//context
import { AuthContext } from '../../context';



const Header = () => {

    const [user] = useContext(AuthContext);

    return ( 
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                {user ? (
                    <span>Logged in as: {user.username}</span>
                    ) : (
                    <Link to='/login'>
                        <span>Log in</span>
                    </Link>
                )}
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
     );
}
 
export default Header;