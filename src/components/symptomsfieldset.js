import React from 'react';
import IndividualSymptom from './individualsymptom.js';
import inputs_data from '../utilities/inputs_data';
import { Link } from 'react-router-dom'
import grampsmdContext from '../utilities/grampsmd_context'

export default class SymptomsFieldset extends React.Component {
    static contextType = grampsmdContext

    handleSubmitDisabled = () => {
        if(this.context.symptoms.length < 3){
            return true;
        } else return false;
    }

    render() {

        const nextstatus = this.handleSubmitDisabled()

        return (
            <form>
                <h3>Please select at least three symptoms: </h3>
                {this.context.allSymptoms.map((symptom, index) =>
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
                <div className='bottom-buttons'>
                        <Link to='/formcontinued'><button id='next' name='next' disabled={nextstatus}>Next</button></Link>
                </div>
            </form>
        )
    }
}