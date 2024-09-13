import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class newsbox extends Component {

  articles = []
  constructor() {
    super();

    this.state = {
      articles: this.articles,

    }

  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=e34bd0d6fd01488c80f93871d69b649f&page=1&pageSize=6";

    

    let data=await fetch(url)
    
    let newsData=await data.json() ;

    this.setState({articles:newsData.articles})
  }

  hendelNextClick=()=>{
    console.log("next")
  }

  hendelPervClick=()=>{
    console.log("perverse")
  }


  render() {
    return (<>

      <div className="container">
        <h2 className='my-3'>Top-Headlins</h2>

        <div className=" row mb-3 ">
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4 mb-3'  key={element.url}>
                <Newsitem  title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} />
              </div>

            )
          })}
        </div>

      <div className="my-3 d-flex justify-content-between">
      <button type="button" disabled={false} onClick={this.hendelPervClick} className="btn btn-dark">&larr;perverse</button>
      <button type="button" onClick={this.hendelNextClick} className="btn btn-dark">Next&rarr;</button>
      </div>    


      </div>
    </>
    )
  }
}
