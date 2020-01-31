import React from 'react';
import './styling.css';
import {Link, Switch, Route, Router} from 'react-router-dom';
import GrampsMDDescription from './grampsmddescription.js'

export default class HeaderSection extends React.Component {
    render(){
        return(
            <header>
                                <Router>
                <h1>

                    <Link to='/'>GrampsMD</Link>

                </h1>
                <Switch>
                <Route exact path='/' component={GrampsMDDescription}/>
                </Switch>
                </Router>
            </header>
        )
    }
}