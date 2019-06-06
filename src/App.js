import React, {Component} from "react"
import Screen from "./Components/screen.jsx"
import Button from "./Components/button.jsx"
import * as math from "mathjs"
import "./App.css"

class App extends Component{
    constructor(){
        super()
        this.state={
            input:""
        }
        this.clickHandle = this.clickHandle.bind(this)
        this.solveHandle = this.solveHandle.bind(this)

    }

    solveHandle(){
        this.setState({
            input:math.eval(this.state.input)
        })


    }

    clickHandle(event){
        const {name, value, className} = event.target
        className ==="clear"?
        this.setState({
            [name]:""
        }):
        this.setState({
            [name]:this.state.input+value
        })
        

    }

    render(){
        return(
            <div className="app-container">
                <Screen input={this.state.input} />
                <Button click={this.clickHandle} equal={this.solveHandle}/>
            </div>
        )
    }
}
export default App