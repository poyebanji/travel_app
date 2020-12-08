import React from 'react';

const Profile = ({user}) => {
    return (
        <div>
            <div className='center '>
            <div className='inline'>
            <label> Name:</label>
            <div>{user.name}</div>
            </div>
            <div className='inline'>
            <label> email:</label>
            <div>{user.email}</div>
            </div>
            <div className='inline'>
            <label> Booked:</label>
            <div>{user.entries}</div>
            </div>
            <div className='inline'>
            <label> Date Joined:</label>
            <div>{user.joined}</div>
            </div>
            </div>      
 
        </div>
      );
}
 
export default Profile;