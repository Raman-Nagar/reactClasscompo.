import React from "react";
export class Sumarray extends React.Component{
    constructor(){
        super()
        this.arr = [3,42,23,78,9,8]
        this.sum =0;
    }
    render(){
        for(let i=0; i<this.arr.length;i++){
            this.sum +=this.arr[i]
        }
        return(
            <>
            <h3>sum of arr = {this.sum}</h3>
            </>
        )
    }
}