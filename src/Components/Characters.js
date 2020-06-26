import React, {Component} from 'react';
import axios from 'axios';
import CharacterSelect from './CharacterSelect';

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        this.getCharacters()
    }

    getCharacters = () => {
        axios.get('/api/character-selection')
        .then(res => {
            this.setState({characters: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        console.log(this.state.characters)
        const mappedCharacters = this.state.characters.map((characters, i) => (
            <CharacterSelect 
                key={i}
                characters={characters}/>
        ))
        return(
            <div className='characterFlex'>
                {mappedCharacters}
            </div>
        )
    }
}

export default Characters;