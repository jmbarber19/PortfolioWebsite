import React from 'react';

const Resume = () => (
    <React.Fragment>
        <h1>
            My Resume
        </h1>
        
        <div className="game">

            <a href="DataContent/Barber_Justin-Resume.pdf">
                <i class="fas fa-file-pdf"></i>
                &nbsp;
                View Resume as PDF
            </a>

            <br />

            Cover letter and references are available upon request. 

            <br />
            <br />
            <br />


            <h2>Work Experience</h2>
            <div className="game">
                <b>Shader and Unity C# Programmer</b><b className="whiteBold"> – Games for Entertainment and Learning Lab</b>
                &nbsp;
                <i>(Summer 2018 - Current)</i>
                <ul>
                    <li>Programmed the character controller and UI for a mobile endless runner game, Monster Savings, to educate teens on financial literacy for the Michigan State University Federal Credit Union</li>
                    <li>Led development during rapid prototyping stages for multiple projects pitched to the client company</li>
                    <li>Created HLSL shaders and particle systems including depth-based water effects and procedural sparks</li>
                    <li>Implemented the game’s animated HUD to be simple and sleek, improving user experience</li>
                </ul>
                <br/>
                <b>React JS Software Developer Internship</b><b className="whiteBold"> – Auto Owners Insurance</b>
                &nbsp;
                <i>(Summer 2018)</i>
                <ul>
                    <li>Developed an internal testing application in React JS to display and modify tables and sub-tables records</li>
                    <li>Mapped multiple table fields and connected transaction tables together to display record history</li>
                    <li>Implemented real-time search on fields or values with support for regular expressions and sub-tables</li>
                    <li>Added SQL update statement generation to allow users to externally execute update statements</li>
                </ul>
            </div>

            <br/>

            <h2>Education</h2>
            <div className="game">
                <b>Michigan State University</b><b className="whiteBold">, East Lansing MI</b> <i>(Anticipated Graduation May 2019)</i>
                <ul>
                    <li>B.S – Computer Science | Minor – Game Design &amp; Development</li>
                    <li>Coursework: Computer Vision, Web Application Architecture, Translation of Programming Languages, Game Design & Development I-II, Game Design Studio, Operating Systems, Software Design</li>
                </ul>
            </div>

            <br/>

            <h2>Project Experience</h2>
            <div className="game">
                <b>Augmented Reality Mechanic Training</b><b className="whiteBold"> – Collaborative Design Course</b> <i>(Fall 2018)</i>
                    <ul>
                        <li>Developed effective AR applications with a team to train mechanics using a Microsoft HoloLens</li>
                        <li>Performed real-time object recognition to efficiently track the process of assembling a model train</li>
                        <li>Implemented network transfer of CAD diagrams and annotations from desktop app to HoloLens</li>
                    </ul>
                <br/>
                <b>Can a Robot Love</b><b className="whiteBold"> – Game Design Studio Course</b> <i>(Fall 2018)</i>
                    <ul>
                        <li>Worked with a team creating real time visual effects for gameplay features</li>
                        <li>Created shaders with Shader Forge and effect event sequencing with C# scripts</li>
                        <li>Game was invited to demo at GDC in the Intel sponsored student showcase</li>
                    </ul>
                <br/>
                <b>Image Line Detection</b><b className="whiteBold"> – Introduction to Computer Vision Course</b> <i>(Spring 2018)</i>
                    <ul>
                        <li>Developed program to identify line segments in images and display lines over the image</li>
                        <li>Used Hough transform to extract and process features to locate lines</li>
                    </ul>
                <br/>
                <b>Python Compiler</b><b className="whiteBold"> – Translation of Programming Languages Course</b> <i>(Fall 2017)</i>
                    <ul>
                        <li>Created compiler which converts python into optimized assembly</li>
                        <li>Implemented parser to read python code, convert it to an abstract syntax tree, translate it into an intermediate language, then finally output assembly</li>
                        <li>Applied local, global, and inter-procedural optimizations to the intermediate code</li>
                    </ul>
            </div>

            <br/>

            <h2>Skills</h2>
            <div className="game">
                <b>Languages</b>: <b className="whiteBold">C# (4 yrs.), C++ (2 yrs.), HLSL (1 yr.)</b>, HTML/CSS (6 yrs.), JavaScript (5 yrs.), Java (2 yrs.), SQL (1 yr.), Python (1 yr.)
                <br/>
                <br/>
                <b>Tools</b>: <b className="whiteBold">Unity</b> (HLSL, Shader Forge, Shader Graph, Visual Effect Graph), <b className="whiteBold">Adobe Suite</b> (Photoshop, Illustrator, After Effects),
                Oracle Database 11g, MySQL, Blender
            </div>

        </div>
    </React.Fragment>
)

export default Resume;
