import React, { useState } from 'react'

function CalcButton(props) {

    return(
    <button className="calc-button" onClick={props.onClick} >{props.text}</button>
    );
}

export default CalcButton;