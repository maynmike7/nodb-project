import React, {Component} from 'react';

class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wasClicked: false
        }
    }

    handleClick = () => {
        this.setState({wasClicked: !this.state.wasClicked})
        this.props.teamFN(this.props.character.id)
    }

    render(){
        return(
            <div className='selectedCharacters'>
                <p className='player'>P{this.props.character.id}</p>
                <img className='character-selected' src={this.props.character.img} alt={this.props.character.id} onClick={() => this.props.unselectFN(this.props.character.id)}/>
                <button className={this.state.wasClicked ? 'clicked-button':'team-button'} onClick={() => 
                    this.handleClick()}>{this.props.character.team}</button>
            </div>
        )
    }
}

export default Select;