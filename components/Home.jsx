import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className='Home'>


            <main>
                <h1>Welcome to My Portfolio</h1></main>
            <hr></hr>

            <div id='info'>
                <div id='button-i'>
                    <Link to="/About" className='about-button'>
                        About Me
                    </Link>
                </div>
                <div id='button-i'>
                    <Link to="/Projects" className='about-button'>
                        Projects
                    </Link>
                </div>
                <div id='button-i'>
                    <Link to="/Services" className='about-button'>
                        Services
                    </Link>
                </div>
                <div id='button-i'>
                    <Link to="/Contact" className='about-button'>
                        Contact Me
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;
