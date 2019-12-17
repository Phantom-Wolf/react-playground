import React, { Component } from 'react'

export class Bomb extends Component {
    static defaultProps = {
       endtime: 8,
    }


    state = {
        countdown: '',
        counter: 0,
    }


    componentDidMount(){
        this.interval = setInterval(()=>{
            let counter = this.state.counter;
            let endtime = this.props.endtime;
            
            if (counter % 2 === 0 && counter < endtime){
                this.setState({
                    countdown: 'tick',
                    counter: counter + 1,
                })
            } else if (counter % 2 !== 0 && counter < endtime){
                this.setState({
                    countdown: 'tock',
                    counter: counter + 1,
                })
            } else {
                this.setState({
                    countdown: 'Boom!'
                })
                clearInterval(this.interval)
            }

        }, 1000)
    }

    


    render() {
        return (
            <div>
                <p>{this.state.countdown}</p>
            </div>
        )
    }
}

export default Bomb
