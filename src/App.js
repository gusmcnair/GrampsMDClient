import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSection from './headersection.js'
import MainSection from './mainsection.js'
import './styling.css';
import grampsmdContext from './grampsmd_context';
import {Router} from 'react-router-dom'


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

  fetchApiData = () => {
    let apiCall = `http://localhost:8000/api/ailments?symptoms=${this.state.symptoms[0]}`
    for (let i = 1; i < this.state.symptoms.length; i++) {
      apiCall += `&symptoms=${this.state.symptoms[i]}`
    }
    apiCall += `&genders=${this.state.genders}&improv=${this.state.improv}`
    console.log(apiCall)
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
          <main>
            <Router>
            <HeaderSection />
            <MainSection resetState={this.resetState} fetchApiData={this.fetchApiData} updateState={this.updateState} deleteFromState={this.deleteFromState} clearArray={this.clearArray} handleChange={this.handleChange} />
            </Router>
          </main>
      </div>
    );
  }
}

