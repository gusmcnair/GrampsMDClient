import React from 'react';
import '../utilities/App.css';
import HeaderSection from './headersection.js'
import '../utilities/styling.css';
import GrampsResults from './grampsresults.js'
import grampsmdContext from '../utilities/grampsmd_context'
import InfoFieldset from './infofieldset'
import SymptomsFieldset from './symptomsfieldset.js'
import { Route, Switch } from 'react-router-dom';
import oldmanpicture from '../graphics/oldman1.jpeg';
import oldmanpensive from '../graphics/oldmanpensive.jpeg'
import GrampsMDDescription from './grampsmddescription'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      symptoms: [],
      genders: [],
      improv: [],
      title: [],
      ailment: [],
      treatment: [],
      illustration: [],
    }
  }

  handleResponse = (response) => {
    this.setState({
      title: response.title,
      ailment: response.ailment,
      treatment: response.treatment,
      illustration: response.treatment,
    })

  }

  updateState = (category, value) => {
    this.setState({
      [category]: this.state[category].concat(value),
    })
  }

  deleteFromState = (category, value) => {
    const newValue = this.state[category].filter((item) => (item !== value))
    this.setState({
      [category]: newValue,
    })
  }

  clearArray = (category, value) => {
    this.setState({
      [category]: value,
    })
  }

  handleChange = (input, event) => {
    this.setState({ [input]: event.target.value })
  }

  resetState = () => {
    this.setState({
      symptoms: [],
      genders: [],
      improv: [],
      title: [],
      ailment: [],
      treatment: [],
      illustration: [],
    })
  }

  render() {
    const contextValue = {
      symptoms: this.state.symptoms,
      genders: this.state.genders,
      improv: this.state.improv,
      title: this.state.title,
      ailment: this.state.ailment,
      treatment: this.state.treatment,
      illustration: this.state.illustration,
    }

    return (
      <div className="App">
        <grampsmdContext.Provider value={contextValue}>
          <main>
            <HeaderSection />
            <Switch>
               <Route exact path='/' component={GrampsMDDescription}/>
               <Route exact path='/formcontinued' component={GrampsMDDescription}/>
            </Switch>

            <section className='main-info'>
                    
                    <Switch>

                        <Route exact path='/'>
                            <article className='img-container'>
                                <img className='main-pic' src={oldmanpicture} alt='heres a pic of grandpa' />
                            </article>
                            <article className='gramps-form-container'>
                                <SymptomsFieldset updateState={this.updateState} deleteFromState={this.deleteFromState} clearArray={this.clearArray} handleChange={this.handleChange} />
                            </article>
                        </Route>

                        <Route exact path='/formcontinued'>
                            <article className='img-container'>
                                <img className='main-pic' src={oldmanpicture} alt='heres a pic of grandpa' />
                            </article>
                            <article className='gramps-form-container'>
                                <InfoFieldset updateState={this.updateState} deleteFromState={this.deleteFromState} clearArray={this.clearArray} handleChange={this.handleChange} />
                            </article>
                        </Route>
                        
                        <Route exact path='/results'>
                            <article className='img-container'>
                                <img className='results-pic' src={oldmanpensive} alt='heres a pic of grandpa' />
                            </article>
                            <article classsName='gramps-form-container'>
                                <GrampsResults resetState={this.resetState} />
                            </article>
                        </Route>

                    </Switch>

              </section>
          </main>
        </grampsmdContext.Provider>
      </div>
    );
  }
}

