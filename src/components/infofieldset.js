import React from 'react';
import IndividualSymptom from './individualsymptom.js'
import grampsmdContext from '../utilities/grampsmd_context'
import { withRouter } from 'react-router-dom';
import inputs_data from '../utilities/inputs_data';
import '../utilities/styling.css';

class InfoFieldset extends React.Component {
    static contextType = grampsmdContext

    onSubmit = () => {
        this.props.fetchApiData();
        this.props.history.push('/results')
    }

    handleSubmitDisabled = () => {
        if (this.context.genders.length === 0 || this.context.improv.length === 0) {
            return true;
        } else return false;
    }


    render() {

        const buttonStatus = this.handleSubmitDisabled();

        return (
            <form className='animated fadeIn'>
                <p>
                    Just a couple more questions – what's the matter, are you in some kind of hurry? Sit back down!
                </p>
                <div></div>
                <h3>Please select your gender.</h3>
                {inputs_data.genders.map((symptom, index) =>
                    <IndividualSymptom
                        key={index}
                        symptom_name={symptom}
                        type='radio'
                        group_name='genders'
                        fullList={inputs_data.genders}
                        updateState={this.props.updateState}
                        clearArray={this.props.clearArray}
                        deleteFromState={this.props.deleteFromState}
                    />
                )}
                <div className='bottom-buttons'></div>
                <h3>Are you currently enrolled in any of those – what are they called, improv classes?</h3>
                {inputs_data.improv.map((symptom, index) =>
                    <IndividualSymptom
                        key={index}
                        symptom_name={symptom}
                        type='radio'
                        group_name='improv'
                        fullList={inputs_data.improv}
                        updateState={this.props.updateState}
                        clearArray={this.props.clearArray}
                        deleteFromState={this.props.deleteFromState}
                    />
                )}
                <div className='bottom-buttons'>
                    <button id='submit' name='submit' onClick={this.onSubmit} disabled={buttonStatus}>Submit&nbsp;&nbsp;&nbsp;</button>
                </div>
            </form>
        )
    }
}
export default withRouter(InfoFieldset)
