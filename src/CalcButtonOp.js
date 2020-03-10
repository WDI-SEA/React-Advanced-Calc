import React, { useState } from 'react'

function CalcButtonOp(props) {

    return(
    <button className="calc-button calc-button-op" onClick={props.onClick} >{props.text}</button>
    );
}

export default CalcButtonOp;