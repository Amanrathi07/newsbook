import React, { Component } from 'react'

export default class Newsitem extends Component {
    
  

  render() {
    let{title,description,urlToImage,url}=this.props ;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={ (urlToImage===null) ? "https://www.reuters.com/resizer/v2/52J72RXTFNKQXEGEULRPIRHNAM.jpg?auth=335823f74151477f9774f40b5006291a9b4ea0d2b7a58a515a6edf5b883144ab&height=1005&width=1920&quality=80&smart=true" : urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-success btn-sm">read more</a>
        </div>
      </div>
    )
  }
}
