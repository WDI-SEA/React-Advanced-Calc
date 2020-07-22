import React from 'react'


const Output = (props) => {

    // let history = props.outputs
    // let reverseHistory = props.outputs.reverse()
    // console.log('should be reverse',reverseHistory)
    // console.log('should be forwards', history)

    let display = props.outputs.map((item) => {
        return (
            <div className="output-item">
                {item}
                <br/>
            </div>
        )
    })

    return (
        <div className="output">
            <h3>History</h3>
            {display}
        </div>
    )


}


export default Output