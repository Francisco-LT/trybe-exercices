import React from 'react'


class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

    this.state = {
      cidade: '',
      idade: '',
      porqueEscolhiEsseTime: '',
      timeDoCoracao: '',
    }
  }

  handleTextAreaChange(event) {
    this.setState({ porqueEscolhiEsseTime: event.target.value })
  }
  render() {
    return(
      <form>
        <label>Digite sua cidade</label>
        <input name="cidade" type="text"></input>
        <label>Digite sua idade</label>
        <input name="idade" type="number"></input>
      <label>Escolha o seu time!</label>
      <select name="timeDoCoracao">
        <option value="galo">Atlético</option>
        <option value="porco">Palmeiras</option>
        <option value="urubu">Flamengo</option>
        <option value="saci">Internaconal</option>
      </select>
      <div>
      <label>Porque você torce para esse time?</label>
      <textarea 
      name="porqueEscolhiEsseTime"
      value={this.state.porqueEscolhiEsseTime}
      onChange={this.handleTextAreaChange}></textarea>
      </div>
      </form>
    )
  }
}

export default Form