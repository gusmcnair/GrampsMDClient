import React from 'react';

export default class IndividualSymptom extends React.Component {

    handleClick = () => {
        if(document.getElementById(this.props.symptom_name).type == 'radio'){
            this.props.clearArray(this.props.group_name, this.props.symptom_name)
            this.props.fullList.map((newsymptom) => {
                if(newsymptom != this.props.symptom_name){
                    document.getElementById('container' + newsymptom).classList.remove('bunko') 
                }
            })
            document.getElementById('container' + this.props.symptom_name).classList.add('bunko')
        }
        else if(document.getElementById(this.props.symptom_name).checked){
            this.props.updateState(this.props.group_name, this.props.symptom_name)
            document.getElementById('container' + this.props.symptom_name).classList.add('bunko')
        } else if (!document.getElementById(this.props.symptom_name).checked){
            this.props.deleteFromState(this.props.group_name, this.props.symptom_name)
            document.getElementById('container' + this.props.symptom_name).classList.remove('bunko') 
        }; 
        }


    render(){        
        return(
            <span className='individual-symptom' id={'container' + this.props.symptom_name}>
            <input name={this.props.group_name} id={this.props.symptom_name} type={this.props.type} value={this.props.symptom_name} onClick={this.handleClick}/>
                    <label htmlFor={this.props.symptom_name}><span className='symptom-name'>{this.props.symptom_name}</span></label>
                    </span>
        )
    }
}