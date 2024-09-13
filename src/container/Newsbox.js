import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class newsbox extends Component {

  articles = []
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      page:1

    }

  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=e34bd0d6fd01488c80f93871d69b649f&page=1&pageSize=12";

    

    let data=await fetch(url)
    
    let newsData=await data.json() ;

    this.setState({articles:newsData.articles})
  }

  hendalNextClick=()=>{
    console.log("next")
  }

  hendalPervClick=()=>{
    console.log("pervius")
  }


  render() {
    return (<>

      <div className="container">
        
      <h2 className='text-center my-3 '>Top-Headlins</h2>
       

        <div className=" row ">
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4 mb-3'  key={element.url}>
                <Newsitem  title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} />
              </div>

            )
          })}
        </div>

      <div className="my-3 d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} onClick={this.hendalPervClick} className="btn btn-dark">&larr; previous</button>
      <button type="button" onClick={this.hendalNextClick} className="btn btn-dark">Next &rarr;</button>
      </div>
      </div>
    </>
    )
  }
}
