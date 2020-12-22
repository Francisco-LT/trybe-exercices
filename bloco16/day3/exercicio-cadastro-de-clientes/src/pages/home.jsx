import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <p>Bem vindo!!</p>
        <Link to="/Login">Faça o login</Link>
      </div>
    )
  }
}

export default Home;