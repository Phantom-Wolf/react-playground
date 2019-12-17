import React, { Component } from 'react'

export class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8,
     }

    state = {
        chamber: null,
        spinningTheChamber: false,
        message: '',
    }

    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true,
            message: 'Spinning the chamber and pulling the trigger! ...'
        
        })
        this.timeout = setTimeout(() => {
            if (this.state.spinningTheChamber === true){
                this.setState({
                    chamber: Math.ceil(Math.random() * 8),
                    spinningTheChamber: false,
                })
            }

            if(this.state.chamber === this.props.bulletInChamber){
                this.setState({
                    message: 'BANG!!!!!'
                })
            } else {
                this.setState({
                    message: 'You are safe!'
                })
            }
        },2000)

        

    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick = {this.handleButtonClick}>Pull the Trigger!</button>
            </div>
        )
    }
}

export default RouletteGun
