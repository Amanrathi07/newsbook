import React, { Component } from 'react'
import Navbar from './container/Navbar'
import Newsbox from './container/Newsbox'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {

  newsbox=6

    return (
  <Router>
        <div>
          <Navbar title="newsBook" />
          <Routes>
            <Route exact path="/" element={<Newsbox key="general" pageSize={this.newsbox} category="general" />} />
            <Route exact path="/general" element={<Newsbox key="general" pageSize={this.newsbox} category="general" />} />
            <Route exact path="/business" element={<Newsbox key="business" pageSize={this.newsbox} category="business" />} />
            <Route exact path="/entertainment" element={<Newsbox key="entertainment" pageSize={this.newsbox} category="entertainment" />} />
            <Route exact path="/health" element={<Newsbox key="health" pageSize={this.newsbox} category="health" />} />
            <Route exact path="/science" element={<Newsbox key="science" pageSize={this.newsbox} category="science" />} />
            <Route exact path="/sports" element={<Newsbox key="sports" pageSize={this.newsbox} category="sports" />} />
            <Route exact path="/technology" element={<Newsbox key="technology" pageSize={this.newsbox} category="technology" />} />
          </Routes>
        </div>
  </Router>
    )
  }
}
