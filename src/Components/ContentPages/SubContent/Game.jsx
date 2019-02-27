import React from 'react';
import PropTypes from 'prop-types';

const Game = (props) => (
    <div className="game">
        <h2>
            {props.gameName}
            {
                props.roles == null ?
                    <React.Fragment />
                : 
                    <React.Fragment>
                        &nbsp;
                        <div className="subtitle">
                            ({props.roles.join(', ')})
                        </div>
                    </React.Fragment>
            }
            
        </h2>
        

        {
            props.imageSource == null ?
                <React.Fragment />
            : 
                <React.Fragment>
                    <br />
                    <div className="imageHolder">
                        <img src={props.imageSource} alt={props.imageSource}/>
                    </div>
                    <br />
                </React.Fragment>

        }

        {
            props.videoSource == null ?
                <React.Fragment />
            : 
                <React.Fragment>
                    <br />
                    <video width="auto" height="auto" autoPlay loop>
                        <source src={props.videoSource} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <br />
                </React.Fragment>

        }


        <br/>

        {props.description}

        <br/>
        <br/>
    
        {
            props.links.map(
                link => (
                    <React.Fragment key={link.url + link.iconClassName + link.text}>
                        <a href={link.url}>
                            <i className={link.iconClassName}></i>
                            &nbsp;
                            {link.text}
                        </a>
                        <br />
                    </React.Fragment>
                )
            )
        }

        <br/>
    </div>
)

Game.propTypes = {
    gameName: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.node.isRequired,
    videoSource: PropTypes.string,
    imageSource: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Game;
