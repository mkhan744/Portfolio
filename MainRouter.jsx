import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/About'
import Contact from './src/Contact'
import Services from './src/Services'
import Project from './src/Project'



const MainRouter = () => {
        return (
                <Routes>
                        
                        <Route path="/" element={<Home />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Project" element={<Project />} />
                        <Route path="/Contact" element={<Contact />} />
                        
                </Routes>
       )
}
export default MainRouter