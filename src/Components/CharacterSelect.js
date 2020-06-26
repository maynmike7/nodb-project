import React, {Component} from 'react'
import Characters from './Characters'

class CharacterSelect extends Component {
    render(){
        return(
            <div className='characterBox'>
                <img src={this.props.characters.ThumbnailUrl} alt={this.props.characters.name}/>
            </div>
        )
    }
}

export default CharacterSelect