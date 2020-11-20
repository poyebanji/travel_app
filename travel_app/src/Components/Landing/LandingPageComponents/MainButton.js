import React from 'react'


const MainButton = (props)=>{
    return (
        <button type='button' className="btn btn-outline-primary btn-lg">{props.text}</button>
    )
}

export default MainButton