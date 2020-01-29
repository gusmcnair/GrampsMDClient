import React from 'react';
import IndividualSymptom from './individualsymptom.js';

const symptomsList = ['hair loss', 'headache', 'whatever']

export default class SymptomsFieldset extends React.Component{


    render(){
        return(
            <fieldset>
                <legend>Please select all of your symptoms below: </legend>
                    {symptomsList.map((symptom, index) => 
                        <IndividualSymptom 
                        key={index}
                        symptom_name={symptom} 
                        type='checkbox'
                        group_name='symptoms'
                        updateState={this.props.updateState}
                        clearArray={this.props.clearArray}
                        deleteFromState={this.props.deleteFromState}
                        />
                        )}
                        <div class='bottom-buttons'>
                <button id='next' name='next' onClick={this.props.nextStep}>Next</button>
                </div>
            </fieldset>
        )
    }
}