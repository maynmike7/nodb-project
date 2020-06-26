import React, {Component} from 'react';
import Header from './Components/Header';
import Characters from './Components/Characters';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Characters />
      </div>
    );
  }
}

export default App;
