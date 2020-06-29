import React, {Component} from 'react';

class Select extends Component {

    render(){
        return(
            <div className='selectedCharacters'>
                <p>P{this.props.character.id}</p>
                <img src={this.props.character.img} onClick={() => this.props.unselectFN(this.props.character.id)}/>
                <button onClick={() => this.props.teamFN(this.props.character.id)}>{this.props.character.team}</button>
            </div>
        )
    }
}

export default Select;