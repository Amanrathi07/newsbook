import React, { Component } from 'react'

export default class Newsitem extends Component {
    
  

  render() {
    let{title,description,urlToImage,url}=this.props ;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={ (urlToImage===null) ? "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1fb99a4b91d2898fa2c43ff23d843400.jpg" : urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-success btn-sm">read more</a>
        </div>
      </div>
    )
  }
}
