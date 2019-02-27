import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import VFX from './ContentPages/VFX';
import About from './ContentPages/About';
import Games from './ContentPages/Games';
import Resume from './ContentPages/Resume';
import Contact from './ContentPages/Contact';

class Content extends Component {
    render() {
        return (
            <article>
                <Switch>
                    <Route exact path='/' component={About}/>
                    <Route path='/Games' component={Games}/>
                    <Route path='/Resume' component={Resume}/>
                    <Route path='/VFX' component={VFX}/>
                    <Route path='/Contact' component={Contact}/>
                </Switch>
            </article>
        );
    }
}

export default Content;
