import React from 'react';
import {Link} from 'react-router-dom'
import grampsmdContext from '../utilities/grampsmd_context'

export default class GrampsResults extends React.Component {
    static contextType = grampsmdContext

      
      render(){
        console.log(this.context)
        return(
            <div>
                <p>
                    {
                        this.context.symptoms.map(symptom => ` ${symptom}`)
                    }
                </p>
                <h2>Your diagnosis: You have the Default Static Client Illness!</h2>
                <p>You're clearly suffering from Static Client Fever, a disease that occurs when the API isn't built or hasn't been connected yet. Stay tuned!</p> 

                <h3>Suggested cure:</h3>
                <p>About 10-15 hours of coding.</p>

                <div className='bottom-buttons'>
                <Link to='/'><button id='submit' name='submit' onClick={this.props.resetState}>Search again!</button></Link>
                </div>
            </div>
        )
    }
}