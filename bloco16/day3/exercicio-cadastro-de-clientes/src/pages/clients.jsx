import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Clients extends React.Component {
  render() {
    const { register, email } = this.props;
    if (!email) return <div>Login não efetuado</div>;
    if (register.length < 1)
    return(
      <div>
        <p> Nenhum cliente cadastrado</p>
        <Link to="/register">Cadastre agora </Link>
      </div>
    )
    return (

    )
  }
}

const mapStateToProps = state => ({
  registers: state.registerReducer,
  email: state.loginReducer. email,
});

export default connect(mapStateToProps)(Clients);