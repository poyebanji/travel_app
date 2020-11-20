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
        <div id="main-question-area" className="container-md">
            <h3>What kind of personality do you have?</h3>
            <form id="question-form">
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
            </form>
        </div>
        <hr/>
        <div id="result-area" className="container-md">
            <p>
                Banff
            </p>
        </div>
        </React.Fragment>
     );
}
 
export default Question;