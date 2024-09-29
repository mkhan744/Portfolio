import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav>
        <img src="./src/assets/img/mk.png" alt="Logo" className="logo"/>
        <Link to="/">Home</Link> | 
        <Link to="/About">About</Link> | 
        <Link to="/Services">Services</Link> | 
        <Link to="/Project">Project</Link> | 
        <Link to="/Contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}