import React from 'react'
// const request = fetch('http://localhost:3000')
// .then(response => response.json());

const personalities = [
    'Adventurous',
    'Laid-back',
    'Spiritual',
    'Traditional',
    'Spontaneous'
]

const Question = () => {
    return ( 
        <React.Fragment>
        <div id="main-question-area" className="container-md personality-area">
            <h3 className="personality-heading">What kind of personality do you have?</h3>
            <form id="question-form" className="personality-selectors">
                <label><p>Adventurous</p></label>
                <input name="personality" type="radio"/>
                <br/>
                <label><p>Adventurous</p></label>
                <input name="personality" type="radio"/>
                <br/>
                <label><p>Adventurous</p></label>
                <input name="personality" type="radio"/>
                <br/>
                <label><p>Adventurous</p></label>
                <input name="personality" type="radio"/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
        <hr/>
        <div id="result-area" className="container-md result-area">
            <p>
                Banff
            </p>
        </div>
        </React.Fragment>
     );
}
 
export default Question;