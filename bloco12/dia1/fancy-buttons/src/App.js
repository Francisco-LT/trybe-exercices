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
    if (this.state.numberOfClicks % 2 !== 0 || this.state.numberOfClicks === 0) {
    console.log("standard button")
    } else {
      console.log ("green button")
    }
  };
  // o primeiro parâmetro de set state pega o valor do statdo anterior ao dessa atualziação
  //cada vez que chamamos o setState ele vai enfileirar a atualização e vai funcionar de forma assíncorna
buttonGreen(evenOrOdd) {
  if (evenOrOdd % 2 !== 0 || evenOrOdd === 0) {
    return ""
  }
   return "greenButton"
}
  render() {
    return <button onClick={this.funckingClick} className={this.buttonGreen(this.state.numberOfClicks)}>{this.state.numberOfClicks}</button>
  }
}

export default App;
