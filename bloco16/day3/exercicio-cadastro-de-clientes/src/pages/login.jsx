import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import login from '../actions/index'

class Login extends React.Component {
  render() {
    const { emailOrPassword, email, password } = this.props;
    return(
      <div>
        <input
          type = "text"
          onChange = {event => this.setState({ email: event.target.value})}
          placeholder = "email"
        />
        <input
          type="password"
          onChange = {event => this.setState({ password: event.target.value})}
          placeholder="senha"
        />
        <div>
          <Link
            to="/clients"
            onClick={() => emailOrPassword(email, password)}>
            Vá para a página de Clientes Cadastrados
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  email: state.loginReducer.email,
  password: state.loginReducer.password,
})

const mapDispatchToProps = dispatch => ({
  emailOrPassword: (email, password) => dispatch(login(email, password))});

export default connect(mapStateToProps, mapDispatchToProps)(Login);