import React from "react";
import { useState, useRef } from "react";
export class Swaping extends React.Component{
    constructor(props){
        super(props)
        console.log("ram")
        this.Swap = this.Swap.bind(this)
        this.num1 = React.createRef()
        this.num2 = React.createRef()
        this.state ={res:"",res1:""}
    }
    Swap(e){
        var a = parseInt(this.num1.current.value)
        var b = parseInt(this.num2.current.value)
        a = a+b
        b = a-b
        a = a-b
        this.setState({res:a,res1:b})
        document.getElementById("txt1").value = a
        document.getElementById("txt2").value = b
        e.preventDefault()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.Swap}>
                <input type="text" ref={this.num1} id ="txt1"/><br />
                <input type="text" ref={this.num2} id ="txt2"/><br />
                <input type="submit" value="click" />
                <h4>{this.state.res}</h4>
                <h4>{this.state.res1}</h4>

                </form>
            </div>
        )
    }
}