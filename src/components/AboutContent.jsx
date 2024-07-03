import React from 'react';
import '../style/App.css'
const AboutContent = () => {
    return (
        <div className='container__info'>
            <div className="container__content">
                <h1>About</h1>
                <hr/>
                <p>This page basic for</p>
            </div>
            <div className="container__content">
                <h1>Posts</h1>
                <hr/>
                <p>In this you can see different posts! <br/>Information taken from json placeholder</p>
            </div>
            <div className="container__content">
                <h1>Error</h1>
                <hr/>
                <p>If you see this page, somethings wrong :(</p>
            </div>
        </div>
    );
};

export default AboutContent;