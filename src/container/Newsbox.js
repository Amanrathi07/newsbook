import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";




export default function Newsbox(props) {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



  const updateNews = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true)

    let data = await fetch(url)

    let newsData = await data.json();


    setArticles(newsData.articles);
    setTotalResults(newsData.totalResults);
    setLoading(false);


  }

  useEffect(() => {
    updateNews();
    props.setProgress(100)
    document.title = `newsBook-${props.category}`
  }, [])


  const capitalize = (str) => {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pageSize}`;

    setLoading(true)
    let data = await fetch(url)

    let newsData = await data.json();


    setArticles(articles.concat(newsData.articles))
    setTotalResults(newsData.totalResults)
    setLoading(false)
    setPage(page + 1)


  };



  return (<>


    <h2 className='text-center my-3'>Top {capitalize(props.category)} Headlines </h2>
    <div className='text-center'>{loading && <Spinner />} </div>

    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={"loading ..."}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className='container '>
        <div className=" row">

          {articles.map((element, index) => {
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
