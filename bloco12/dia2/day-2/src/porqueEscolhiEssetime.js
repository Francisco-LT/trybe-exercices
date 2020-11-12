import React from 'react'

class PorqueEscolhiEsseTime extends React.Component {
  render(){
    const {value, handleChange} = this.props

    let error = undefined;
    if(value.length > 120) error = 'text too fucking big!!'

    return(
    <div>
    <label>Porque você torce para esse time?
      <textarea 
      name="porqueEscolhiEsseTime"
      value={value}
      onChange={handleChange}/>
      <span>{error ? error : ''}</span>
      </label>
      </div>
    )
  }
}




export default PorqueEscolhiEsseTime