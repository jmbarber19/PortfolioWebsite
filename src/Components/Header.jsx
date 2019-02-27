import React from 'react';
import { Link } from 'react-router-dom';

// import SubText from './SubText';

import TextLoop from "react-text-loop";

const Header = () => (
    <React.Fragment>
        <nav>
            <div className="titleWrapper">
                <h1 className="mainTitle">
                    Justin Barber
                </h1>
                <br/>

                <div className="titleSubTextHolder">
                    <TextLoop className="titleSubText" mask={true}>
                        <React.Fragment>Gameplay Programmer</React.Fragment>
                        <React.Fragment>Web Developer</React.Fragment>
                        <React.Fragment>Software Developer</React.Fragment>
                        <React.Fragment>Visual Effects Artist</React.Fragment>
                    </TextLoop>
                </div>
            </div>
            <Link to='/'>About</Link>
            <Link to='/Games'>Games</Link>
            {/* <Link to='/VFX'>VFX</Link> */}
            <Link to='/Resume'>Resume</Link>
            <Link to='/Contact'>Contact</Link>
        </nav>
        <hr />
    </React.Fragment>
)

export default Header;
