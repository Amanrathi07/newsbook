import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";




export default class newsbox extends Component {

  articles = []
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
      totalResults: 0
    }

  }


  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })
    let data = await fetch(url)

    let newsData = await data.json();

    this.setState({
      articles: newsData.articles,
      totalResults: newsData.totalResults,
      loading: false,
    })

  }

  async componentDidMount() {
    this.updateNews();
    document.title = `newsBook-${this.props.category}`
  }

  hendelNextClick = async () => {
    await (this.setState({ page: this.state.page + 1 }))
    this.updateNews();
  }

  hendelPervClick = async () => {
    await (this.setState({ page: this.state.page - 1 }))
    this.updateNews();
  }

  capitalize = (str) => {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };


  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })
    let data = await fetch(url)

    let newsData = await data.json();

    this.setState({
      articles: this.state.articles.concat(newsData.articles),
      totalResults: newsData.totalResults,
      loading: false,
      page: this.state.page + 1
    })

  };


  render() {
    return (<>

      
        <h2 className='text-center my-3'>Top {this.capitalize(this.props.category)} Headlines </h2>
        <div className='text-center'>{this.state.loading && <Spinner />} </div>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={"loading ..."}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className='container '>
            <div className=" row">

              {this.state.articles.map((element,index) => {
                return (
                  <div className='col-md-4 mb-3' key={index}>
                    <Newsitem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author} name={element.source.name} />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
     


    </>
    )
  }
}