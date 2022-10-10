import React from "react";
export class Rev extends React.Component{
    render(){
        var str = "ragannamar"
        var rev = " "
        for(let i=str.length-1; i>=0; i--){
            rev += str[i];
        }
       
            return(
                <>
                <h3>revers of string = {rev}</h3>
                </>
            )
    }
}