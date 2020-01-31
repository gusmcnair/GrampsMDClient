import React from 'react';
import {Link, Router} from 'react-router-dom'
import grampsmdContext from './grampsmd_context'
import IndividualSymptom from './individualsymptom'


export default class GrampsResults extends React.Component {
    static contextType = grampsmdContext

      
      render(){

        return(
            <div>
                <p>
                    {
                        this.context.symptoms.map(symptom => ` ${symptom}`)
                    }
                </p>
                <h2>Your diagnosis: {this.context.title}</h2>
                <p>{this.context.ailment}</p> 

                <h3>Suggested cure:</h3>
                <p>{this.context.treatment}</p>

                <div class='bottom-buttons'>
                <Router>
                <Link to='/'><button id='submit' name='submit' onClick={this.props.resetState}>Search again!</button></Link>
                </Router>
                </div>
            </div>
        )
    }
}