import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className=" spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="sr-only"></span>
            </div>
        )
    }
}
