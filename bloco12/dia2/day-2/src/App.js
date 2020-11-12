import React from 'react'


class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      cidade: '',
      idade: '',
      porqueEscolhiEsseTime: '',
      timeDoCoracao: '',
      vaiNoCampo: false
    }
  }

  handleChange({target}) {
    const {name} = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ 
      [name]: value 
    })
  }
  render() {
    return(
      <form>
        <fieldset>
        <div>
        <label>Digite sua cidade</label>
        <input
        name="cidade"
        type="text"
        value={this.state.cidade}
        onChange={this.handleChange}>
        </input>
        </div>
        <div>
        <label>Digite sua idade</label>
        <input
        name="idade"
        type="number"
        value={this.state.idade}
        onChange={this.handleChange}>
        </input>
        </div>
        </fieldset>
        <fieldset>
        <div>
      <label>Escolha o seu time!</label>
      <select name="timeDoCoracao"
      value={this.state.timeDoCoracao}
      onChange={this.handleChange}>
        <option value="galo">Atlético</option>
        <option value="porco">Palmeiras</option>
        <option value="urubu">Flamengo</option>
        <option value="saci">Internaconal</option>
      </select>
      </div>
      <div>
      <label>Porque você torce para esse time?</label>
      <textarea 
      name="porqueEscolhiEsseTime"
      value={this.state.porqueEscolhiEsseTime}
      onChange={this.handleChange}>
      </textarea>
      </div>
      <div>
        <input
        type="checkbox"
        name="vaiNoCampo"
        value={this.state.vaiNoCampo}
        onChange={this.handleChange}>
        </input>
      </div>
      </fieldset>
      </form>
    )
  }
}

export default Form