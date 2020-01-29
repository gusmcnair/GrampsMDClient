import React from 'react';
import './styling.css';
import {Link, Switch, Route} from 'react-router-dom';
import GrampsMDDescription from './grampsmddescription.js'

export default class HeaderSection extends React.Component {
    render(){
        return(
            <header>
                <h1>
                    <Link to='/'>GrampsMD</Link>
                </h1>
                <Switch>
                <Route exact path='/' component={GrampsMDDescription}/>
                </Switch>
            </header>
        )
    }
}