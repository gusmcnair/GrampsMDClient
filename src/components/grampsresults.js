import React from 'react';
import {Link} from 'react-router-dom'
import grampsmdContext from '../utilities/grampsmd_context' 

export default class GrampsResults extends React.Component {
    static contextType = grampsmdContext

      
      render(){
        console.log(typeof this.context.ailment)
        if(this.context.ailment.length === 0){
            return(
                <div class="loader"></div>
            )
        }
        return(
            <div>

                <h4>Your diagnosis:</h4>
                <h2>{this.context.title}</h2>
                <p>{this.context.ailment}</p> 

                <h4>Suggested cure:</h4>
                <p>{this.context.treatment}</p>

                <div className='bottom-buttons'>
                <Link to='/'><button id='submit' name='submit' onClick={this.props.resetState}>Search again!</button></Link>
                </div>
            </div>
        )
    }
}