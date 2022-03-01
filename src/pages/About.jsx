import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <h1 className='text-6xl mb-4'>About This App</h1>
            <p className='mb-4 text-2xl font-light'>App to search Github users</p>
            <p className='text-lg text-gray-400'>Version: <span className="text-white">1.0.0</span></p>
        </Fragment>
    );
};

export default About;