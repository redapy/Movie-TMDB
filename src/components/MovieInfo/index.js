import React from 'react';
import PropTypes from 'prop-types';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//components
import Thumb from '../Thumb';
//styles
import { Content, Text, Wrapper } from './MovieInfo.stylys';
//image
import NoImage from '../../images/no_image.jpg';


const MovieInfo = ({movie}) => {
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

                </Text>
            </Content>
        </Wrapper>
     );
}

MovieInfo.propTypes = {
    movie: PropTypes.object
}
 
export default MovieInfo;