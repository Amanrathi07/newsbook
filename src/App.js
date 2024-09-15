import React, { Component } from 'react'
import Navbar from './container/Navbar'
import Newsbox from './container/Newsbox'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {

  newscomponent=6 ;

  render() {  

    return (<>
  <Router>
        <div>
          <Navbar title="newsBook" />
          <Routes>
            <Route exact path="/" element={<Newsbox key="general" pageSize={this.newscomponent} category="general" />} />
            <Route exact path="/general" element={<Newsbox key="general" pageSize={this.newscomponent} category="general" />} />
            <Route exact path="/business" element={<Newsbox key="business" pageSize={this.newscomponent} category="business" />} />
            <Route exact path="/entertainment" element={<Newsbox key="entertainment" pageSize={this.newscomponent} category="entertainment" />} />
            <Route exact path="/health" element={<Newsbox key="health" pageSize={this.newscomponent} category="health" />} />
            <Route exact path="/science" element={<Newsbox key="science" pageSize={this.newscomponent} category="science" />} />
            <Route exact path="/sports" element={<Newsbox key="sports" pageSize={this.newscomponent} category="sports" />} />
            <Route exact path="/technology" element={<Newsbox key="technology" pageSize={this.newscomponent} category="technology" />} />
          </Routes>
        </div>
  </Router>
  </>  )
  }
}
