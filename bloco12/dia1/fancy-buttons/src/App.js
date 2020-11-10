import React from 'react';
import './App.css';

function fuckingButton() {
  console.log('Fucking button')
};

function fuckingButton1() {
  console.log('Fucking button1')
};

function fuckingButton2() {
  console.log('Fucking button2')
};

class App extends React.Component {
  render() {
    return (
      <div>
    <button onClick={fuckingButton}>Fucking button</button>
    <button onClick={fuckingButton1}>Fucking button1</button>
    <button onClick={fuckingButton2}>Fucking button2</button>
    </div>
    )
  }
}

export default App;
