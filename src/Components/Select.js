import React, {Component} from 'react';

class Select extends Component {
    render(){
        return(
            <div className='selectedCharacters'>
                <p>P{this.props.character.id}</p>
                <img src={this.props.character.img}/>
                <button>Edit</button>
            </div>
        )
    }
}

export default Select;