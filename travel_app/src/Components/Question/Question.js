import React from 'react'

const request = "loading";

const matchCity = () =>{

    let city = fetch('/questions', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            personality: "Adventurous"
        }
    }).then(respsonse => respsonse.json())
    .then(data =>{
        request = data;
    })
}

const personalities = [
    'Adventurous',
    'Laid-back',
    'Spiritual',
    'Traditional',
    'Spontaneous'
]

const Question = () => {
    const usersPersonalites = personalities.map((personality,i)=>{
        return (
            <div>
                <label ><p>{personality} </p></label>
                <input name='personalitySelection' key={personality} id={personality} type="radio"/>
                <br/>
            </div>

        )
    })
    return ( 
        <React.Fragment>
        <div id="main-question-area" className="container-md personality-area">
            <h3 className="personality-heading">What kind of personality do you have?</h3>
            <form id="question-form" className="personality-selectors">
                {usersPersonalites}
                <input type="submit"/>
               
            </form>
        </div>
        <hr/>
        <div id="result-area" className="container-md result-area">
            <p>
                {request}
            </p>
        </div>
        </React.Fragment>
     );
}
 
export default Question;