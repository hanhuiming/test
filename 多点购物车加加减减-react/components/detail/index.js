import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        console.log(this.props.location.search)
        
        return (
            <div className="main">
                Detail
            </div>
        )
    }
}
