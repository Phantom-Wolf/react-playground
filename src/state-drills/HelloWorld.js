import React, { Component } from 'react'

export class HelloWorld extends Component {
    state = {
        who: 'World',
    }


    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick = {() => this.setState({who: 'World'})}>World</button>
                <button onClick = {() => this.setState({who: 'Friend'})}>Friend</button>
                <button onClick = {() => this.setState({who: 'React'})}>React</button>
            </div>
        )
    }
}

export default HelloWorld
