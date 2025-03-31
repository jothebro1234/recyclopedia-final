import { useState } from 'react'
import './App.css'
// Import our custom CSS
//import './sass/main.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'
import Start from './Pages/Start'
import About from './Pages/About'
import Map1 from './Pages/Map1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/video" element={<Video></Video>}></Route>
        <Route path="/start" element={<Start></Start>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        
        
      </Routes> 
    </Router>
    
  )
}

export default App
