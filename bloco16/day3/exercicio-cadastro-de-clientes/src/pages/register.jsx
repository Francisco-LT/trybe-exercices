// src/Register.js
import React from 'react';
import { connect } from 'react-redux';
import { addRegister } from '../actions/index';
import { Link } from 'react-router-dom';

class Register extends React.Component {

  render() {
    const { userLogin, name, age, email } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={event => this.setState({ age: event.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </div>
        <button onClick={() => addRegister(age, name, email)}>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLogin: state.loginReducer});
const mapDispatchToProps = dispatch => ({
  addRegister: (age, name, email) => dispatch(addRegister(age, name, email))});

export default connect(mapStateToProps, mapDispatchToProps)(Register);