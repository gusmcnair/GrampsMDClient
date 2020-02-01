import React from 'react';
import IndividualSymptom from './individualsymptom.js';
import inputs_data from '../utilities/inputs_data';
import { Link, Router } from 'react-router-dom'
import grampsmdContext from '../utilities/grampsmd_context'

export default class SymptomsFieldset extends React.Component {
    static contextType = grampsmdContext

    render() {

        return (
            <form>
                <h3>Please select all of your symptoms: </h3>
                {inputs_data.symptoms.map((symptom, index) =>
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
                    <Router>
                        <Link to='/formcontinued'><button id='next' name='next'>Next</button></Link>
                    </Router>
                </div>
            </form>
        )
    }
}