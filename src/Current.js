import React from 'react'

const Current = (props) => {
    return(
        <div>
            <h4>mode is: {props.getOperator(props.mode)}, current value is: {props.buffer2}</h4>
        </div>
    )
}


export default Current
