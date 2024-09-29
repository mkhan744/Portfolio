import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "../MainRouter";
import Layout from "../components/Layout";

function App() {
  console.log('App component rendered');
  return (
    <div className="container">
      <Router>
        <Layout />
        <MainRouter />
      </Router>
    </div>
  );
};

export default App;