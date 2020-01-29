import React from 'react';
import './styling.css';
import SymptomsFieldset from './symptomsfieldset.js'
import InfoFieldset from './infofieldset.js'
import grampsmdContext from './grampsmd_context'


export default class GrampsForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            step: 1,
            symptoms: [],
            genders: [],
            improv: [],
        }
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

    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1,
            symptoms: [],
        })
    }

    handleChange = (input, event) => {
        this.setState({[input]: event.target.value})
    }

    handleSymptomsClick = () => {
    }

    render(){
        const contextValue = {
            symptoms: this.state.symptoms,
            genders: this.state.genders,
            improv: this.state.improv,
        }
        return(
            <div>
        <grampsmdContext.Provider value ={contextValue}>
            {this.state.step === 1 ? 
                <SymptomsFieldset nextStep={this.nextStep} handleChange = {this.handleChange} handleSymptomsClick={this.handleSymptomsClick} deleteFromState={this.deleteFromState} updateState={this.updateState} clearArray={this.clearArray}/> 
                :
                <InfoFieldset prevStep={this.prevStep} handleChange = {this.handleChange} handleSubmit={this.handleSubmit} deleteFromState={this.deleteFromState} updateState={this.updateState} clearArray={this.clearArray} onSubmit={this.onSubmit}/>}
       </grampsmdContext.Provider>
   </div>
   ) }
}