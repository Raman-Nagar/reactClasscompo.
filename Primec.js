import React from "react";

export class Primec extends React.Component {
    constructor() {
        super()
        this.state = {n:2,c:true}
    }
    checkp() {
        var {n,c} = this.state
        for (let i = 2; i <= n/2; i++) {
            if (n % i === 0) {
                c = false;
                break;
            }
        }
        if (c) {
            return "prime"
        }
        else {
            return "not prime"
        }
    }
    render() {
        return (
            <>
                <div>
                    <h3>{this.checkp()}</h3>
                </div>
            </>
        )
    }
}