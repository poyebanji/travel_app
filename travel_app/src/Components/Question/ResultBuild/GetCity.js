import React from 'react'

const GetCity = (props) => {
    return(
        <div>
            <form onSubmit={props.cityFunc}>
                <label htmlFor="city-label">Enter city: </label>
                <input required type="text" name="city-label"/>
                <br />
                <label htmlFor="results-label">Number of results per category: </label>
                <input required type="text" name="results-label" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default GetCity