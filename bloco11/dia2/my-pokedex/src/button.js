import React from "react";


class Button extends React.Component {
  render() {
    const { className, value, disabled, onClick } = this.props.button
    return (
      <div className="button-class">
      <button onClick={onClick} 
      className={className} value={value} disabled={disabled}>
        {value}
      </button>
    </div>
    )
}
}

export default Button;
