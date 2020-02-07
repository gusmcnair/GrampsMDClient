import React from 'react';
import {Link} from 'react-router-dom'
import grampsmdContext from '../utilities/grampsmd_context' 

export default class GrampsResults extends React.Component {
    static contextType = grampsmdContext


    handleOpacity = () => {
            document.getElementById('beginopaque').classList.add('becomevisible')
}

      
      render(){


        if(this.context.ailment.length === 0){
            return(
                <>
                <div className="loader">
                    
                </div>
                <h3 className='loading'>LOADING... </h3>
                </>            )
        } else {
        return(
            <div className='animated fadeIn'>
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
    }}
}