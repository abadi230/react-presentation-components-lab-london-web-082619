// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    state={
        mood: 'happy'
    }

    handleClick = () =>{
        let mood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({mood})
        // this.setState(state => {
        //     if (state.mood === 'happy') mood: 'sad'  
        //     mood: 'happy'
        // }) // not work
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}
