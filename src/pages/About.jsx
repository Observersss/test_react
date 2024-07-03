import React from 'react';
import AboutContent from "../components/AboutContent";

const About = () => {
    return (
        <div>
            <h1 style={{marginTop: 30, textAlign: 'center'}}>
                Welcome to first mini-project on React!
            </h1>
            <h3 style={{opacity:0.7, textAlign: 'center'}}>
                In this page you can read basic info about this web-page:
            </h3>
            <AboutContent/>
        </div>
    );
};

export default About;