import React from 'react';
import './Profile.css'
import {Row, Col } from 'react-bootstrap'

const styles = {
    root: {
        width: "80%",
        marginTop: "60px",
        margin: "auto",
        background: "antiquewhite",
        padding: "80px",
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

const Profile = ({user}) => {
    return (
        <div style={styles.root}  >
            <div className='center' style={styles.labelText}>
            <Row>
                <Col> <label className='pr-3'> Name:</label> </Col> 
                <Col><div>{user.name}</div></Col>
            </Row>
            <Row>
                <Col> <label className='pr-3'> email:</label></Col>       
                <Col>{user.email}</Col>
            </Row>
            <Row>
                <Col>  <label  className='pr-3'> Booked:</label></Col>       
                <Col>{user.entries}</Col>
            </Row>
            <Row>
                <Col><label className='pr-3'> Date Joined:</label></Col>       
                <Col>{user.joined}</Col>
            </Row>            
            </div>      
 
        </div>
      );
}
 
export default Profile;