import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';





export default class newsbox extends Component {

  articles = []
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      page: 1 ,
      loading:false

    }

  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e34bd0d6fd01488c80f93871d69b649f&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({loading:true})
    let data = await fetch(url)

    let newsData = await data.json();

    this.setState({ articles: newsData.articles,
       totalResults: newsData.totalResults,
      loading:false})
  }

  hendelNextClick = async () => {

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) 
     {
      console.log("next")
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e34bd0d6fd01488c80f93871d69b649f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

      this.setState({ loading:true})
   
      let data = await fetch(url)

      let newsData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: newsData.articles,
         loading:false ,
      })
    }

  }

  hendelPervClick = async () => {
    console.log("perverse")

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e34bd0d6fd01488c80f93871d69b649f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

    this.setState({ loading:true})
   
    let data = await fetch(url)

    let newsData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: newsData.articles,
      loading:false
    })
  }


  render() {
    return (<>

      <div className="container">
        <h2 className='text-center my-3'>{this.props.category}-Top headlines </h2>
       <div className='text-center'>{this.state.loading && <Spinner />} </div>  

        <div className=" row mb-3 ">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className='col-md-4 mb-3' key={element.url}>
                <Newsitem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} />
              </div>

            )
          })}
        </div>

        <div className="my-3 d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} onClick={this.hendelPervClick} className="btn btn-dark">&larr;perverse</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.hendelNextClick} className="btn btn-dark">Next&rarr;</button>
        </div>


      </div>
    </>
    )
  }
}
