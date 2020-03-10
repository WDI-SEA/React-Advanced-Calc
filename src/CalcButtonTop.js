import React, { useState } from 'react'

function CalcButtonTop(props) {

    return(
    <button className="calc-button calc-button-top" onClick={props.onClick} >{props.text}</button>
    );
}

export default CalcButtonTop;