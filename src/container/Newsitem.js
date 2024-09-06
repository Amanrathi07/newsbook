import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let{title,description,}=this.props ;
    return (
        <div className="card" style={{width: "18rem;"}}>
        <img src="https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-success btn-sm">read more</a>
        </div>
      </div>
    )
  }
}
