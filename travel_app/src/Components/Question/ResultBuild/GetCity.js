import React from 'react';
import './ResultBuild.css';
import { Image } from 'semantic-ui-react';
import hiking from './hiking.jpg';
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'


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

    const { register, handleSubmit, errors} = useForm()
    return(
            <div  className='city-background'>
                <div>
                    <Form style={{width: "100%", margin: "0px"}} onSubmit={handleSubmit(props.cityFunc)}>
                        <Form.Group controlId="formCity">
                            <Form.Label>Enter your city: </Form.Label>
                            <Form.Control name="city" type="text" placeholder="enter your city: " ref={register({required: true})}/>
                            {errors.city && <p>This field is required</p>}
                        </Form.Group>
                        <Form.Group controlId="formNumResults">
                            <Form.Label>Number of results: </Form.Label>
                            <Form.Control type="text" name="results" placeholder="number of results" ref={register({required: true})} />
                            {errors.results && <p>This field is require</p>}
                            <Form.Text className="text-muted">
                                *Number of results per activity
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div>
                    <Image src={hiking} size='massive' />
                </div>
        </div>
    )
}

export default GetCity