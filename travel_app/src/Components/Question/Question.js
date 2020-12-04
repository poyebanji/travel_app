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
    const [location, setLocation] = useState([])
    const [lon, setLon] = useState("")
    const [lat, setLat] = useState("")

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
            const searchCity = data
            setCity(data)
            console.log(searchCity)
            fetch(`https://www.mapquestapi.com/search/v2/radius?origin=${searchCity}&radius=50&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|703301&outFormat=json&key=zEOA7EFpBlhIdscffyFHdMO1PthS2OVM`

            ).then(response => response.json())
            .then(data=>{
                setResult(data.searchResults)
                setLon(data.searchResults[0].fields.lng)
                setLat(data.searchResults[0].fields.lat)
            console.log(data.searchResults, data.searchResults[0].fields.lat)
           
            })
        })
        
        
    }
    const displayResult = result.map((data,i)=>{
        return <h5 key={i}>{i+1}--{data.fields.group_sic_code_name}--{data.fields.name}--{data.fields.phone}</h5>
    })



    const onSubmitLocation = ()=>{
        fetch(`https://api.tomtom.com/search/2/search/resort.json?countrySet=CA&lat=${lat}&lon=${lon}&radius=5000&key=cGrI2bj3NGTOdZonqxpJnqGn31YxqZLi`)
        .then(response => response.json())
        .then(data=>{
             console.log(data.results)
             setLocation(data.results)
       
        })

    }

    const displayLocation = location.map((data,i)=>{
        return <h5 key={i}>{i+1}--{data.poi.name}--{data.poi.phone}</h5>
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
            <button onClick={onSubmitLocation}>Location</button>
            {displayLocation}
        </div>
        </React.Fragment>
     );
}
 
export default Question;