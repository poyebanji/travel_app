import React from 'react';

const Profile = ({user}) => {
    return (
        <div>
            <div>
            <label> Name:</label>
            <div>{user.name}</div>
            <label> email:</label>
            <div>{user.email}</div>
            <label> entries:</label>
            <div>{user.entries}</div>
            <label> Date Joined:</label>
            <div>{user.joined}</div>

            </div>      
 
        </div>
      );
}
 
export default Profile;