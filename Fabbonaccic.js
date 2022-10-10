import React from "react";
export class Fabbonaccic extends React.Component {
    constructor() {
        super()
        this.ser = { n: 10, a: 0, b: 1, c: 0, str: "" }
    }
    render() {
        var { n, a, b, c, str } = this.ser
        for (let i = 0; i < n; i++) {
            str += c + ","
            a = b
            b = c
            c = a + b
        }
        return (
            <>
                <h2>{str}</h2>
            </>
        )
    }
}