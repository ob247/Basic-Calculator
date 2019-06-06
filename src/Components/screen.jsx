import React from "react"
import "./screen.css"

function Screen(props){
    return(
        <div className="screen">
            <h2 className="input">{props.input}</h2>
        </div>
    )
}
export default Screen