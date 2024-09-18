import React from "react";

export default function Newsitem(props) {

  const PublishedDate = ( publishedAt ) => {
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

  
    
    return (
      <>
        <div className="card">
          <img
            src={
              props.urlToImage === null
                ? "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1fb99a4b91d2898fa2c43ff23d843400.jpg"
                : props.urlToImage
            }
            className="card-img-top"
            alt="..."
          />

          
          <span
            className="position-absolute top-0  badge rounded-pill bg-danger"
            style={{ zIndex: 1 }}
          >
            {props.name}
          </span>
          

          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>

            <div className="d-flex justify-content-between">
              <p>
                <small>{PublishedDate(props.publishedAt)} </small>
              </p>
              <p>~{props.author}</p>
            </div>

            <a
              href={props.url}
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

