import React from 'react';
import {Link} from 'react-router-dom'
import grampsmdContext from './grampsmd_context'

export default class GrampsResults extends React.Component {
    static contextType = grampsmdContext
      
      render(){
        return(
            <div>
                <h2>You’ve got Plowman’s Fever!</h2>
                <p>When I was growing up on the farm, seems like me and all the other siblings used to come down with Plowman’s Fever almost every spring. It always started with a cough, and then you’d start feeling a little woozy and the 103-degre fever would come on. You’d spend a week feeling like you couldn’t leave the bed, but you had to, because it was plowing season and you had to be up at 5 every morning to help Dad get ready for beet plantin'. Those were the days!</p> 

                <h3>Suggested cure:</h3>
                <p>Who needs any of that newfangled medicine? Your great-grandmother’s miracle tonic always did the trick for me. All it was, is a little honey, a little lavender, and eight ounces of Kentucky bourbon. Drink up!</p>

                <div class='bottom-buttons'>
                <Link to='/'><button id='submit' name='submit'>Search again!</button></Link>
                </div>
            </div>
        )
    }
}