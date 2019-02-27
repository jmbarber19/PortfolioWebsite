import React from 'react';

import ImageGallery from 'react-image-gallery';

const About = () => (
    <React.Fragment>

        <h1>
            About Me
        </h1>
        
        <div className="game">

            I'm <b>Justin Barber</b>, and I have experience with:

            <ul>
                <li>
                    Web Development
                </li>
                <li>
                    Game Programming
                </li>
                <li>
                    Visual Effects
                </li>
            </ul>

            <br />

            Here are some screenshots of things I've worked on:

            <br />

            <ImageGallery
                items={[
                    {
                        original: 'DataContent/MonsterSavingsImg.png',
                        description: 'Monster Savings'
                    },
                    {
                        original: 'DataContent/ShankImg.png',
                        description: 'Shank the Swordfish'
                    },
                    {
                        original: 'DataContent/PunchBlockzImg.png',
                        description: 'Punch Blockz'
                    },
                    {
                        original: 'DataContent/NitoriIncImg.png',
                        description: 'NitoriInc.'
                    }
                ]}
                additionalClass="galleryImageHolder game"
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                slideInterval={40000}
                slideDuration={550}
                autoPlay={true}
            />

            <br/>
            <br/>
            <b className="whiteBold">But who am I?</b>
            <br/>
            <br/>

            Born and raised in Michigan, I started programming in my High School, creating basic games with Visual Basic and websites with HTML and JavaScript.

            <br />
            <br />

            I'm currently majoring in <b className="whiteBold">Computer Science Engineering</b> at <i>Michigan State University</i> but I also have a <b className="whiteBold">Game Design and Development</b> minor. While developing for student projects in the minor, I learned how fun it is to combine programming and artistic skills to create cool VFX and other tricks to create unique looking games.

            <br />
            <br />

            Find Me On These Websites:

            <br />

            <div className="game">
                <a href="https://www.linkedin.com/notifications/">
                    <i className="fab fa-linkedin"></i>
                    &nbsp;
                    LinkedIn
                </a>
                
                <br />
                
                <a href="https://github.com/jmbarber19">
                    <i className="fab fa-github"></i>
                    &nbsp;
                    Github
                </a>

                <br />

                <a href="https://twitter.com/jmbarber19">
                    <i className="fab fa-twitter"></i>
                    &nbsp;
                    Twitter
                </a>

                <br />

                <a href="https://waterbuddy16.itch.io/">
                    <i className="fas fa-external-link-alt"></i>
                    &nbsp;
                    Itch.io
                </a>
            </div>
        </div>

    </React.Fragment>
)

export default About;
