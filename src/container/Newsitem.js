import React, { Component } from "react";

export default class Newsitem extends Component {
  formatPublishedDate = (publishedAt) => {
    const date = new Date(publishedAt);

    const time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });

    return `${time} on ${formattedDate}`;
  };

  render() {
    let { title, description, urlToImage, url, publishedAt, author, name } =
      this.props;
    return (
      <>
        <div className="card">
          <img
            src={
              urlToImage === null
                ? "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1fb99a4b91d2898fa2c43ff23d843400.jpg"
                : urlToImage
            }
            className="card-img-top"
            alt="..."
          />

          
          <span
            className="position-absolute top-0  badge rounded-pill bg-danger"
            style={{ zIndex: 1 }}
          >
            {name}
          </span>
          

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <div className="d-flex justify-content-between">
              <p>
                <small>{this.formatPublishedDate(publishedAt)} </small>
              </p>
              <p>~{author}</p>
            </div>

            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark btn-sm"
            >
              read more
            </a>
          </div>
        </div>
      </>
    );
  }
}
