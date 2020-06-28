import React, {Component} from 'react';
import axios from 'axios';
import CharacterSelect from './CharacterSelect';

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characterMenu: []
        }
    }

    componentDidMount(){
        axios.get('/api/character-selection')
        .then(res => {
            this.setState({characterMenu: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedCharacters = this.state.characterMenu.map((characters, i) => (
            <CharacterSelect 
                key={i}
                characters={characters}
                selectFN={this.props.selectFN}/>
        ))
        return(
            <div className='characterFlex'>
                {mappedCharacters}
            </div>
        )
    }
}

export default Characters;