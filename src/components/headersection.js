import React from 'react';
import '../utilities/styling.css';
import {Link} from 'react-router-dom';

export default class HeaderSection extends React.Component {
    render(){
        return(
            <header>
                <h1 onClick={this.props.resetState}>

                    <Link to='/'>Gramps<span className='headerfont'>MD</span></Link>

                </h1>
            </header>
        )
    }
}