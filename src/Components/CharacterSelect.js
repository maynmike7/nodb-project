import React, {Component} from 'react'


class CharacterSelect extends Component {
    handleSelect = () => {
        const {characters} = this.props
        let newCharacter = {
            name: characters.name,
            img: characters.ThumbnailUrl
        }

        this.props.selectFN(newCharacter)
    }

    render(){
        const {characters} = this.props

        return(
            <div className='characterBox' onClick={this.handleSelect}>
                <img src={characters.ThumbnailUrl} alt={characters.name}/>
            </div>
        )
    }
}

export default CharacterSelect