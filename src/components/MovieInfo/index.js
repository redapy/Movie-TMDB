import React, {useContext} from 'react';
import PropTypes from 'prop-types';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import API from '../../API';
//components
import Thumb from '../Thumb';
import Rate from '../Rate';
//styles
import { Content, Text, Wrapper } from './MovieInfo.stylys';
//image
import NoImage from '../../images/no_image.jpg';
//context
import { AuthContext } from '../../context'


const MovieInfo = ({movie}) => {

    const [user] = useContext(AuthContext);

    const handleRating = async value => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value);
        console.log(rate)
      };

    return ( 
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={movie.poster_path 
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                    }
                    clickable={false}
                >
                </Thumb>
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>Plot</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>Director{movie.directors.length >1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                    {user && (
                        <div>
                        <p>Rate Movie</p>
                        <Rate callback={handleRating} />
                        </div>
                    )}
                </Text>
            </Content>
        </Wrapper>
     );
}

MovieInfo.propTypes = {
    movie: PropTypes.object
}
 
export default MovieInfo;