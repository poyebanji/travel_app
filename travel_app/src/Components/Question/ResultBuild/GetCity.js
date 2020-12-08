import React from 'react';
import './ResultBuild.css';
import { Image } from 'semantic-ui-react';
import hiking from './hiking.jpg';

const GetCity = (props) => {
    return(
        
            <div  className='city-background'>

            <form onSubmit={props.cityFunc}>
                <label htmlFor="city-label">Enter city: </label>
                <input required type="text" name="city-label"/>
                <br />
                <label htmlFor="results-label">Number of results per category: </label>
                <input required type="text" name="results-label" />
                <button type="submit">Submit</button>
            </form>
            <Image src={hiking} size='massive' />
        </div>

       

        
    )
}

export default GetCity