import React from 'react'

import './Button.css'

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this)
        this.state = {
            active:false,
            spanClass:'value',
            x : 0,
            y : 0
        }
    }

    handleClick(e){
        let rect = e.currentTarget.getBoundingClientRect();
        this.setState({
            active:true,
            spanClass:'value active',
            x:`${e.clientX-rect.left-5}px`,
            y:`${e.clientY-rect.top-5}px`
        })
        console.log(`left: ${this.state.x} top: ${this.state.y}`)
        
    }

    handleAnimationEnd(e){
        this.setState({
            active:false,
            spanClass:'value'
        })
    }

    render(){
        return (
                <button className='button' onClick={this.handleClick}><span className={this.state.spanClass}>{this.props.value}</span> 
                    {this.state.active === true?<span className='circle' onAnimationEnd={this.handleAnimationEnd} style={ {left:this.state.x , top:this.state.y} } />:''}
                </button>
        )
    }
}