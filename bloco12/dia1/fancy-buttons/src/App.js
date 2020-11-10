import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super (props)
    this.funckingClick = this.funckingClick.bind(this);
    this.state = {
      numberOfClicks: 0
    }
  }
  
  funckingClick() {
    this.setState((previousState, _props) => ({
      numberOfClicks: previousState.numberOfClicks + 1
    }))
  };
  // o primeiro parâmetro de set state pega o valor do statdo anterior ao dessa atualziação
  //cada vez que chamamos o setState ele vai enfileirar a atualização e vai funcionar de forma assíncorna

  render() {
    console.log(this)
    return <button onClick={this.funckingClick}>{this.state.numberOfClicks}</button>
  }
}

export default App;
