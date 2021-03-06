import React from 'react';
import IndividualSymptom from './individualsymptom.js';
import { Link } from 'react-router-dom'
import grampsmdContext from '../utilities/grampsmd_context'


export default class SymptomsFieldset extends React.Component {
    static contextType = grampsmdContext

    handleSubmitDisabled = () => {
        if (this.context.symptoms.length < 3) {
            return true;
        } else return false;
    }

    render() {

        const nextstatus = this.handleSubmitDisabled()

        if (this.context.allSymptoms.length === 0) {
            return (
                <>
                    <div className="loader">

                    </div>
                    <h3 className='loading'>LOADING... </h3>
                </>
            )
        }

        return (
            <form className='animated fadeIn'>
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
                    <Link to='/formcontinued'><button id='next' name='next' disabled={nextstatus}>Next&nbsp;&nbsp;&nbsp;</button></Link>
                </div>
            </form>
        )
    }
}