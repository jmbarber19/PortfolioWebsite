import React from 'react';

const Contact = () => (
    <React.Fragment>
        <h1>
            Contact Me
        </h1>

        <div className="game">

            If you need to get in touch with me try some of the following options:

            <ul>
                <li>Phone: <b>+1 (248) 600 9731</b></li>
                <li>Email: <a href="mailto:barber44@msu.edu">barber44@msu.edu</a></li>
            </ul>

            <br/>
            Or you can send me an email through this form:
            <br/>

            <div className="game">
                <form action="https://formspree.io/barber44@msu.edu" method="POST">
                    Your Email:
                    &nbsp;
                    <input type="email" name="_replyto" placeholder="johnsmith@gmail.com"></input>
                    <br/>
                    Your Name:
                    &nbsp;
                    <input type="text" name="name" placeholder="John Smith"></input>
                    <br/>
                    Message:
                    <br/>
                    <textarea rows="4" cols="50" type="textarea" name="text" placeholder="Message text goes here"></textarea>
                    <br/>
                    <br/>
                    <input type="submit" value="Send Email"></input>
                </form> 
            </div>
        </div>

    </React.Fragment>
)

export default Contact;
