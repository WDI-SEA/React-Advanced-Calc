import React, {useState}from "react";
import PropTypes from "prop-types"

function Button(props) {
  
  return (
    <button className={props.className} onClick={props.onClick(props.value)}>
      {props.value}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Button;