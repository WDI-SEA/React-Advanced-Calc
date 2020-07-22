import React from 'react'

const Current = (props) => {
    return(
        <div>
            <h5>mode:</h5>
            <h2>{props.getOperator(props.mode)}</h2>
            <br/>
             <h5>current value:</h5>
             <h2>{props.buffer2}</h2>
        </div>
    )
}


export default Current
