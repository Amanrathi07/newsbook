import React,{useState} from 'react'
import Navbar from './container/Navbar'
import Newsbox from './container/Newsbox'

import LoadingBar from 'react-top-loading-bar' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function App() {

  let newscomponent=25;
  const apikey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0)
  

  
  return (<>
  <Router>
        <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />        
          <Navbar title="newsBook" />
          
      
         
          <Routes>
            <Route exact path="/" element={<Newsbox key="general" pageSize={newscomponent} setProgress={setProgress}  api={apikey} category="general" />} />
            <Route exact path="/general" element={<Newsbox key="general" pageSize={newscomponent} setProgress={setProgress}  api={apikey} category="general" />} />
            <Route exact path="/business" element={<Newsbox key="business" pageSize={newscomponent} setProgress={setProgress}  api={apikey} category="business" />} />
            <Route exact path="/entertainment" element={<Newsbox key="entertainment" pageSize={newscomponent} setProgress={setProgress}  api={apikey} category="entertainment" />} />
            <Route exact path="/health" element={<Newsbox key="health" pageSize={newscomponent} setProgress={setProgress}  api={apikey} category="health" />} />
            <Route exact path="/science" element={<Newsbox key="science" pageSize={newscomponent} setProgress={setProgress}  api={apikey} category="science" />} />
            <Route exact path="/sports" element={<Newsbox key="sports" pageSize={newscomponent} setProgress={setProgress}  api={apikey} category="sports" />} />
            <Route exact path="/technology" element={<Newsbox key="technology" pageSize={newscomponent} setProgress={setProgress}  api={apikey} category="technology" />} />
          </Routes>
        </div>
  </Router>
  </>  )
}
