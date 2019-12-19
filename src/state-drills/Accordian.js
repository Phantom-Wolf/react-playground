import React, { Component } from 'react'

export class Accordian extends Component {
    static defaultProps = {
        sections: [],
    }

    state = {
        currentSectionIndex: null,
    }

    setCurrentSection(index){
        this.setState({
            currentSectionIndex: index
        })
    }

    renderList() {
        const active = this.state.currentSectionIndex
        return this.props.sections.map((section, index)=> (
            <li key={index}>
                <button onClick = {()=>{this.setCurrentSection(index)}}>
                    {section.title}
                </button>
                {(active === index) && <p>{section.content}</p>}
            </li>
        ))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

export default Accordian
