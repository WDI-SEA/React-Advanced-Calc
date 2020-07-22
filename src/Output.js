import React from 'react'


const Output = (props) => {

    // reverses history array to display from top to bottom
    let reverseHistory = props.outputs.reverse()

    // iterates over history.reverse() to return draw data (app.js)
    let display = reverseHistory.map((item) => {
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