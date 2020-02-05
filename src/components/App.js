import React from 'react';
import '../utilities/App.css';
import HeaderSection from './headersection.js'
import {withRouter} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../utilities/styling.css';
import GrampsResults from './grampsresults.js'
import grampsmdContext from '../utilities/grampsmd_context'
import InfoFieldset from './infofieldset'
import SymptomsFieldset from './symptomsfieldset.js'
import { Route, Switch } from 'react-router-dom';
import oldmanpicture from '../graphics/oldman1.jpeg';
import oldmanpensive from '../graphics/oldmanpensive.jpeg'
import oldmanangry from '../graphics/oldmanangry.jpeg'
import oldmanhappy from '../graphics/oldmanhappy.jpeg'
import oldmanexplain from '../graphics/oldmanpensive.jpeg'
import oldmansad from '../graphics/oldmansad.jpeg'
import oldmanpeeved from '../graphics/oldmanpeeved.jpeg'
import oldmanshout from '../graphics/oldmanshout.jpeg'
import oldmanchild from '../graphics/oldmanchild.jpeg'
import GrampsMDDescription from './grampsmddescription'

let useThisPicture = oldmanchild;


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allSymptoms: [],
      symptoms: [],
      genders: [],
      improv: [],
      title: [],
      ailment: [],
      treatment: [],
      illustration: [],
    }
  }

  fetchApiData = () => {
    let apiCall = `https://fierce-tor-19786.herokuapp.com/api/ailments?symptoms=${this.state.symptoms[0]}`
    for (let i = 1; i < this.state.symptoms.length; i++) {
      apiCall += `&symptoms=${this.state.symptoms[i]}`
    }
    apiCall += `&genders=${this.state.genders}&improv=${this.state.improv}`
    fetch(apiCall)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(response => {
        this.handleResponse(response)
      })
      .catch(err => console.log(err))
  }

  handleResponse = (response) => {
    let revisedAilment = response.ailment;
    if (this.state.genders === 'male') { revisedAilment = revisedAilment.replace(/!gender!/gi, 'man') }
    else if (this.state.genders === 'female') { revisedAilment = revisedAilment.replace(/!gender!/gi, 'lady') }
    else { revisedAilment = revisedAilment.replace(/!gender!/gi, 'kid') }
    console.log(revisedAilment);
    this.setState({
      title: response.title,
      ailment: revisedAilment,
      treatment: response.treatment,
      illustration: response.illustration,
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


  setIllustration = () => {
    console.log(this.state.illustration)
    if (this.state.illustration === 'oldmanpeeved') {
      return oldmanpeeved
    } else if (this.state.illustration === 'oldmansad') {
      return oldmansad
    } else if (this.state.illustration === 'oldmanangry') {
      return oldmanangry
    } else if (this.state.illustration === 'oldmanpensive') {
      return oldmanpensive
    } else if (this.state.illustration === 'oldmanexplain') {
      return oldmanexplain
    } else if (this.state.illustration === 'oldmanhappy') {
      return oldmanhappy
    } else if (this.state.illustration === 'oldmanshout') {
      return oldmanshout
    } else if (this.state.illustration === 'oldmanchild') {
      return oldmanchild
    } else { return oldmanpicture }

  }

  handleSymptomsData = (response) => {
    let symptomsList = [];
    response.map((value) => {
      symptomsList.push(value.symptom)
    })
    this.setState({
      allSymptoms: symptomsList,
    })
  }

  componentDidMount() {
    console.log('this and that')
    const symptomsApiCall = 'http://localhost:8000/api/symptoms'
    fetch(symptomsApiCall)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(response => this.handleSymptomsData(response))
      .catch(err => console.log(err))
  }

  render() {

    console.log(this.props.location.key)

    const contextValue = {
      allSymptoms: this.state.allSymptoms,
      symptoms: this.state.symptoms,
      genders: this.state.genders,
      improv: this.state.improv,
      title: this.state.title,
      ailment: this.state.ailment,
      treatment: this.state.treatment,
      illustration: this.state.illustration,
    }


    return (
      <>
        <TransitionGroup className='transition-group'>
          <CSSTransition key={this.props.location.key} timeout={{ enter: 1000 }} classNames={'fade'}>

            <div className="App">
              <grampsmdContext.Provider value={contextValue}>
                <main>
                  <HeaderSection resetState={this.resetState} />
                  <Switch>
                    <Route exact path='/' component={GrampsMDDescription} />
                    <Route exact path='/formcontinued' component={GrampsMDDescription} />
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
                          <InfoFieldset updateState={this.updateState} fetchApiData={this.fetchApiData} deleteFromState={this.deleteFromState} clearArray={this.clearArray} handleChange={this.handleChange} />
                        </article>
                      </Route>

                      <Route exact path='/results'>
                        <article className='img-container'>
                          <div className='tags-div'>
                            <h4>Your information:</h4>
                            <p>
                              {
                                this.state.symptoms.map((symptom, index) => <span key={index + '__' + symptom} className='result-symptoms'> {symptom.replace(/ /g, '_')} </span>)
                              }
                              {
                                this.state.ailment.length === 0 ? <> </> :
                                  <>
                                    <span className='result-symptoms'> {this.state.genders} </span>
                                    <span className='result-symptoms'> {this.state.improv}_improv </span>
                                  </>
                              }
                            </p>
                          </div>
                          <img className='results-pic' src={this.setIllustration()} alt='heres a pic of grandpa' />
                        </article>
                        <article classsName='gramps-form-container'>
                          <GrampsResults resetState={this.resetState} />
                        </article>
                      </Route>

                    </Switch>
                  </section>
                </main>
              </grampsmdContext.Provider>
              <div className='disclaimer'>GrampsMD is not serious medical advice and if you think it is, that's kind of on you.</div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}

export default withRouter(App)
