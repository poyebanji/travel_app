import React from 'react';
import './ResultBuild.css';
import { Image } from 'semantic-ui-react';
import hiking from './hiking.jpg';
import { Form, Button } from 'react-bootstrap'

const styles = {
    root: {
        margin: '20px'
    },
    outer: {
        display: 'flex',
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.3rem',
    }
}
const GetCity = (props) => {
    return(
        
            <div  className='city-background'>

<div>
            <Form style={{width: "100%", margin: "0px"}} onSubmit={props.cityFunc}>
                <Form.Group controlId="formCity">
                    <Form.Label>Enter your city: </Form.Label>
                    <Form.Control type="text" placeholder="enter your city: " />
                </Form.Group>
                <Form.Group controlId="formNumResults">
                    <Form.Label>Number of results: </Form.Label>
                    <Form.Control type="text" placeholder="number of results" />
                    <Form.Text className="text-muted">
                        *Number of results per activity
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

            {/* <form onSubmit={props.cityFunc}>
                <label htmlFor="city-label">Enter city: </label>
                <input required type="text" name="city-label"/>
                <br />
                <label htmlFor="results-label">Number of results per category: </label>
                <input required type="text" name="results-label" />
                <button type="submit">Submit</button>
            </form> */}
            
         {/* <div style={styles.root}>
             <form onSubmit={props.cityFunc}>
                 <div style={styles.outer}>
                     <div style={styles.inner}>
                         <label  htmlFor="city-label">Enter city: </label>
                         <label htmlFor="results-label">Number of results per category: </label>
                     </div>
                     <div style={styles.inner}>
                         <input required type="text" name="city-label"/>
                         <input required type="text" name="results-label" />
                     </div>
                 </div>
                 <button type="submit">Submit</button>
             </form>
         </div> */}
         <Image src={hiking} size='massive' />

        </div>

    

        
    )
}

export default GetCity