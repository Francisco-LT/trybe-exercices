import React from 'react';
class Form extends React.Component {
  constructor() {
    super()
    this.state = {
    }
    this.handleState = this.handleState.bind(this);
    this.handleErros = this.handleErros.bind(this);
  }

 handleErros() {
    this.setState({
      formularioComErros: this.state.name === '' || this.state.estado === '' || 
      this.state.estado === 'Selecione' ? false : true,
    });
  }

  handleState = (event) => {
    this.handleErros();
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {  
    return (
      <form className="form">
        <fieldset>
            <legend>Campos Obrigatórios</legend>
        <div>
            <input name="Name" type="text" value={this.state.name} onChange={this.handleState} 
            error={this.handleErros} />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleState} />
            <label>Idade</label>
            <input type="number" name="idade" value={this.state.idade} onChange={this.handleState} />
            <label>Foto</label>
            <input type="file" name="foto" value={this.state.foto} onChange={this.handleState} />
        </div>
        </fieldset>
        <fieldset>
            <legend>Campos Opcionais</legend>
        <div>
          <input type="checkbox" name="trybe" value={this.state.trybe} onChange={this.handleState} />Tryber
        <select name="Estado" value={this.state.estado} onChange={this.handleState} />
        <label>Descriçaõ</label>
        <textarea name="descricao" cols="30" rows="10"
        value={this.state.descricao} onChange={this.handleState} ></textarea>
        </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.trafficReducer.signal.color
});

const mapDispatchToProps = { changeSignal };

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form); 