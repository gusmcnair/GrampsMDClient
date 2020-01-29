import React from 'react';
import './styling.css';
import GrampsForm from './grampsform.js'
import GrampsResults from './grampsresults.js'
import { Route, Switch, Router } from 'react-router-dom';
import oldmanpicture from './oldman.jpg';



export default class MainSection extends React.Component {
    render() {
        return (
            <section className='main-info'>
                <article className='img-container'>
                    <img src={oldmanpicture} alt='heres a pic of grandpa' />
                </article>
                <article className='gramps-form-container'>
                    <Switch>
                        <Route exact path='/' component={GrampsForm}/>
                        <Route exact path='/results' component={GrampsResults} />
                    </Switch>
                </article>
            </section>
        )
    }
}