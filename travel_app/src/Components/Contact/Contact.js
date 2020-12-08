import React from 'react';
import emailjs from 'emailjs-com'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Contact.css'


const styles = {
    root: {
        width: "50%",
        margin: "auto",
        background: "antiquewhite",
        padding: "5%",
        fontSize: "1.5rem",
        borderRadius: "20px",
        backgroundColor: "#357E85"
    },
    labelText: {
        fontFamily: "Roboto",
        fontSize: "2rem",
        color: "#CCEBF4",
    }
}

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_2f2atcu', 'template_q11eusf', e.target, 'user_pNBd0vrDLxjRHJJgdtsqT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });

        e.target.reset()
    }


    return (
        <div style={styles.root}>
                <form onSubmit={sendEmail}>
                    <Row>
                        <Col>
                            <Form.Group controlId="emailID">
                                <Form.Label style={styles.labelText}>Email Address</Form.Label>
                                <Form.Control type="email" name="from_email" placeholder="name@example.com" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="fname">
                                <Form.Label style={styles.labelText}>First Name</Form.Label>
                                <Form.Control type="text" name="fname" placeholder="First Name:" required/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="lname">
                                <Form.Label style={styles.labelText}>Last Name</Form.Label>
                                <Form.Control type="text" name="lname" placeholder="Last Name:" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="message">
                                <Form.Label style={styles.labelText}>Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows={3} placeholder="Leave a message here" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <button style={styles.labelText} type='submit' class="custom-button">SUBMIT</button>
                </form>
        </div>
      );
}
 
export default Contact;