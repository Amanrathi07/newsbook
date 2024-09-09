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
    let url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=e34bd0d6fd01488c80f93871d69b649f";

    

    let data=await fetch(url)
    
    let newsData=await data.json() ;

    this.setState({articles:newsData.articles})
  }

  render() {
    return (<>

      <div className="container">
        <h2 className='mt-3'>Top-Headlins</h2>

        <div className="row mt-3">
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <Newsitem  title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} />
              </div>

            )
          })}
        </div>


      </div>
    </>
    )
  }
}
