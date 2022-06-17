// Code SimpleComponent Here

import React from "react"

export default class SimpleComponent extends React.Component{
    state = {
        mood: "happy"
    }

    onHandleClick = () => {{
        this.setState({
            mood: "sad"
        })
    }}
    render(){
        return(<div onClick={this.onHandleClick}>{this.state.mood}</div>)
    }
}
