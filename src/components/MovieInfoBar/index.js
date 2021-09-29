import React from 'react';
//Helpers
import {calcTime, convertMoney} from '../../helpers';
import { Content, Wrapper } from './MovieInfoBar.styles';


const MovieInfoBar = ({time, budget, revenue}) => {
    return ( 
        <Wrapper>
            <Content>
                <div className="column">
                    <p>Time: {calcTime(time)}</p>
                </div>
                <div className="column">
                    <p>Budget :{convertMoney(budget)}</p>
                </div>
                <div className="column">
                    <p>Revenue: {convertMoney(revenue)}</p>
                </div>
            </Content>
        </Wrapper>
     );
}
 
export default MovieInfoBar;