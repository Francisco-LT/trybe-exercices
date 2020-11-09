import './App.css';
import React from 'react';
const task = (value) => {
  return (
    value.map(element => <li key = {value}> {element} </li>)
);
}

const toDoList = ['cortar cabelo', 'arrumar cama', 'varrer', 'limpar', 'lavar roupa']
class ReactClass extends React.Component {
  render() {
  return (
    <ol>{ task(toDoList) }</ol>
  );
};
}

export default ReactClass;
