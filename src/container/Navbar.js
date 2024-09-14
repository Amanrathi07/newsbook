import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {

    let { title } = this.props;
    return (
      <>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#eaf1ea", }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><strong>{title}</strong></a>

            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </>
    )
  }
}
