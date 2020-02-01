import React from 'react';
import '../utilities/styling.css';
import InfoFieldset from './infofieldset'
import SymptomsFieldset from './symptomsfieldset.js'
import GrampsResults from './grampsresults.js'
import { Route, Switch, Router } from 'react-router-dom';
import oldmanpicture from '../graphics/oldman.jpg';



export default class MainSection extends React.Component {
    render() {
        return (
            <section className='main-info'>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <article className='img-container'>
                                <img src={oldmanpicture} alt='heres a pic of grandpa' />
                            </article>
                        </Route>
                        <Route exact path='/formcontinued'>
                            <article className='img-container'>
                                <img src={oldmanpicture} alt='heres a pic of grandpa' />
                            </article>
                        </Route>
                        <Route exact path='/results'>
                            <article className='img-container'>
                                <img src={this.context.illustration} alt='heres a pic of grandpa' />
                            </article>
                        </Route>
                    </Switch>
                    <article className='gramps-form-container'>
                        <Switch>
                            <Route exact path='/'>
                                <SymptomsFieldset fetchApiData={this.props.fetchApiData} updateState={this.props.updateState} deleteFromState={this.props.deleteFromState} clearArray={this.props.clearArray} handleChange={this.props.handleChange} />
                            </Route>
                            <Route exact path='/formcontinued'>
                                <InfoFieldset fetchApiData={this.props.fetchApiData} updateState={this.props.updateState} deleteFromState={this.props.deleteFromState} clearArray={this.props.clearArray} handleChange={this.props.handleChange} />
                            </Route>
                            <Route exact path='/results'>
                                <GrampsResults resetState={this.props.resetState} />
                            </Route>
                        </Switch>
                    </article>
                </Router>
            </section>
        )
    }
}