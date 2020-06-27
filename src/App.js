import React, {Component} from 'react';
import Header from './Components/Header';
import Characters from './Components/Characters';
import Selection from './Components/Selection';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCharacters: []
    }
  }

  componentDidMount() {
    axios.get('/api/selected-character')
    .then(res => {
      this.setState({selectedCharacters: res.data})
    })
    .catch(err => console.log(err))
  }

  selectCharacter = character => {
    axios.post('/api/selected-character', {character})
    .then(res => {
      this.setState({selectedCharacters: res.data})
    })
    .catch(err => console.log(err))
  }

  render(){
    // console.log(this.state.selectedCharacters)
    return (
      <div className="App">
        <Header />
        <Characters 
          selectFN={this.selectCharacter}/>
        <Selection 
          selectedCharacters={this.state.selectedCharacters}/>
      </div>
    )
  }
}

export default App;
