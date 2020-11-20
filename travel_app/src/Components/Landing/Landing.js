import React from 'react';
import Navbar from './LandingPageComponents/Navbar'
import MainText from './LandingPageComponents/MainText'
import ImageLarge from './LandingPageComponents/ImageLarge';
import MainButton from './LandingPageComponents/MainButton'

class Landing extends React.Component {

    render() {
        const largeMessage = "Adventure is waiting"
        const mediumMessage = "Just follow a few simple steps to find your next big adventure!"
        const signIn = "sign in/ register"
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Navbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <MainText largeMessage={largeMessage} mediumMessage={mediumMessage} />
                        <MainButton text={signIn}/>
                    </div>
                    <div className="col">
                        <ImageLarge />
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing