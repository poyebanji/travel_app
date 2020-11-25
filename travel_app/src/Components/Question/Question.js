import React, {useState} from 'react'


const personalities = [
    'Adventurous',
    'Relaxing',
    'Spiritual',
    'Traditional',
    'Spontaneous'
]

const Question = ({user}) => {
 
    const [personality, setPersonality] = useState("")
    const [city, setCity] = useState("Loading")
    const [result, setResult] = useState([])

    const usersPersonalites = personalities.map((personal,i)=>{
        return (
            <div key={personal.toString()}>
                <label htmlFor={i}><p>{personal}</p></label>
                <input 
                name='personalitySelection' 
                 
                id={i} 
                type="radio"
                onClick={(e)=>{
                    setPersonality(e.target.defaultValue)
                }}
                value={personal}/>
                <br/>
            </div>
        )
    })

    function matchCity(personalityResult) {
        let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({personality: personalityResult})
        }
        fetch('http://localhost:3000/questions', options)
        .then(response => response.json())
        .then(data => {
            setCity(data)
            console.log(data)
        })
        fetch(`https://www.mapquestapi.com/search/v2/radius?origin=${city},+AB&radius=50&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|701111&outFormat=json&key=zEOA7EFpBlhIdscffyFHdMO1PthS2OVM`

        ).then(response => response.json())
        .then(data=>{
            setResult(data.searchResults)
        console.log(data.searchResults)
       
        })
    }

    const displayResult = result.map((data,i)=>{
        return <h5 key={i}>{i+1}--{data.fields.group_sic_code_name} {data.name}</h5>
    })
    
    return ( 
        <React.Fragment>
        <div id="main-question-area" className="container-md personality-area">
            
            <h3>Welcome {user.name}</h3>
            <h3 className="personality-heading">What kind of personality do you have?</h3>
            <form id="question-form" className="personality-selectors">
                {usersPersonalites}
                <button onClick={(e) => {
                    e.preventDefault()
                    console.log(personality)
                    matchCity(personality)
                }}>
                    Submit
                </button>
            </form>
        </div>
        <hr/>
        <div id="result-area" className="container-md result-area">
            <p>
              {city}
            </p>
            {displayResult}
        </div>
        </React.Fragment>
     );
}
 
export default Question;