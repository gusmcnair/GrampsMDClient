import React from 'react';
import IndividualSymptom from './individualsymptom.js'
import grampsmdContext from './grampsmd_context'
import {withRouter } from 'react-router';
const gendersList = ['male', 'female', 'other']

const improvList = ['yes', 'no']


class InfoFieldset extends React.Component{
    static contextType = grampsmdContext

    onSubmit = () => {
        console.log(this.context);
        this.props.history.push('/results')
    }


    render(){
        return(
            <fieldset>
                <legend>Please select your gender.</legend>
                {gendersList.map((symptom, index) => 
                        <IndividualSymptom 
                        key={index}
                        symptom_name={symptom} 
                        type='radio'
                        group_name='genders'
                        fullList={gendersList}
                        updateState={this.props.updateState}
                        clearArray={this.props.clearArray}
                        deleteFromState={this.props.deleteFromState}
                        />
                        )}
                        <div class='bottom-buttons'></div>
                <legend>Are you currently in an improv class?</legend>
                {improvList.map((symptom, index) => 
                        <IndividualSymptom 
                        key={index}
                        symptom_name={symptom} 
                        type='radio'
                        group_name='improv'
                        fullList={improvList}
                        updateState={this.props.updateState}
                        clearArray={this.props.clearArray}
                        deleteFromState={this.props.deleteFromState}
                        />
                        )}
                <div class='bottom-buttons'>
                <button id='prev' name='prev' onClick={this.props.prevStep}>Previous</button>
                <button id='submit' name='submit' onClick={this.onSubmit}>Submit</button>
                </div>
            </fieldset>
        )
    }
}

export default withRouter(InfoFieldset)