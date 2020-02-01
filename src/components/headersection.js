import React from 'react';
import '../utilities/styling.css';
import {Link, Switch, Route} from 'react-router-dom';
import GrampsMDDescription from './grampsmddescription.js'

export default class HeaderSection extends React.Component {
    render(){
        return(
            <header>
                <h1>

                    <Link to='/'>GrampsMD</Link>

                </h1>
            </header>
        )
    }
}