import React from 'react';
import Game from './SubContent/Game';

const Games = () => (
    <React.Fragment>
        <h1>
            Games I've Worked On
        </h1>

        <Game
            gameName='Monster Savings'
            roles={["VFX", "Programmer", "UI"]}
            description={
                <React.Fragment>
                    <b>Monster Savings</b> is a mobile game developed for the Michigan State University Federal Credit Union to help educate young teens on the topic of financial literacy. The game is an endless runner featuring three main characters platforming through a procedurly generated environment. It is currently in development at the Michigan State University game development lab called the <a href="http://gel.msu.edu/"><i className="fas fa-external-link-alt"></i>&nbsp;Games for Entertainment and Learning Laboratory</a>.

                    <br/>
                    <br/>
                
                    I worked as the visual effects artist creating shaders and real time particle effects. Additionally I was leading prototype development in the game's early pitch stage. Later on I would contribute to designing and creating UI/ menu assets and scripts.
                    
                    <br/>
                    <br/>

                    The game is currently not released yet, but this section will updated with links when the game has fully shipped to the Apple App Store and the Google Play Store!
                </React.Fragment>
            }
            videoSource='DataContent/MonsterSavingsVid.mp4'
            links={[
                {
                    text: 'Game Page',
                    url: 'https://gamejolt.com/games/shanktheswordfish/303066',
                    iconClassName: 'fas fa-external-link-alt'
                },
                {
                    text: 'YouTube Gameplay',
                    url: 'https://gamejolt.com/games/shanktheswordfish/303066',
                    iconClassName: 'fab fa-youtube'
                }
            ]}
        />

        <hr />

        <Game
            gameName='Shank the Swordfish'
            roles={["Programmer", "VFX", "UI"]}
            description={
                <React.Fragment>
                    <b>Shank the Swordfish</b> is a game intended to evoke feelings of intense excitement and panic, as you swim around as Shank the swordfish, spearing a variety of fish avoiding obstacles. The goal is to get a high enough score, affected by various multipliers which depend on how quickly and efficiently you are able to kill fish.

                    <br/>
                    <br/>
        
                    I worked as the main programmer, visual effects artist, and UI artist. I headed programming the player controller and spawners. Additionally I made the visual effects such as blood bursts, explosions, and environmental effects. A more minor note is the UI work I did, creating UI art assets such as the rankings in the upper right corner, and the score combo functionality seen at the bottom of the screen.
                </React.Fragment>
            }
            videoSource='DataContent/ShankVid.mp4'
            links={[
                {
                    text: 'Game Page',
                    url: 'https://gamejolt.com/games/shanktheswordfish/303066',
                    iconClassName: 'fas fa-external-link-alt'
                },
                {
                    text: 'YouTube Gameplay',
                    url: 'https://gamejolt.com/games/shanktheswordfish/303066',
                    iconClassName: 'fab fa-youtube'
                }
            ]}
        />

        <hr />

        <Game
            gameName='Punch Blockz'
            roles={["Programmer", "VFX", "UI"]}
            description={
                <React.Fragment>
                    <b>Punch Blockz</b> is a student project action clicker game designed for mobile play. Tapping on the left and right side of the screen will attack the enemy on each side of the screen while swiping up at the right time will parry enemies dealing damage and restoring your health. Enemies get progressively harder as you progress on to new zones fighting enemies with different attacks.

                    <br/>
                    <br/>
                
                    I worked as the main programmer, visual effects artist, and UI artist. I headed programming the player controller and enemies. Additionally I made the hit spark, windup, parrying, and UI particle effects.
                </React.Fragment>
            }
            videoSource='DataContent/PunchBlockzVid.mp4'
            links={[
                {
                    text: 'Game Page',
                    url: 'https://waterbuddy16.itch.io/punch-blockz',
                    iconClassName: 'fas fa-external-link-alt'
                }
            ]}
        />

        <hr />

        <h1>
            Other Games
        </h1>

        <Game
            gameName='NitorInc.: Touhou Microgames '
            roles={["Programmer"]}
            description={
                <React.Fragment>
                    <b>Nitori Inc</b> is a Touhou fangame which I did volunteer work on making a minigame for called Zombie Parts. A demo of the game is currently available on steam, or you can look over the projects source code in the public GitHub repo.
                </React.Fragment>
            }
            imageSource='DataContent/NitoriIncImgRaw.jpg'
            links={[
                {
                    text: 'Steam Page',
                    url: 'https://waterbuddy16.itch.io/',
                    iconClassName: 'fab fa-steam-symbol'
                },
                {
                    text: 'GitHub Repo',
                    url: 'https://github.com/NitorInc/NitoriWare',
                    iconClassName: 'fab fa-github'
                }
            ]}
        />
    </React.Fragment>
)

export default Games;
