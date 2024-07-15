import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/header/header'
import PagesContainerv2 from './containers/PagesContainerv2'
import './index.css';
import Details from './pages/Details';
import Cart from './components/Cart';
const App = () => {
  return (
    <div className="App">
      <PagesContainerv2>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/products/:id" element= { <Details/> } />
          <Route path="/Cart" element= { <Cart/> } />
        </Routes>
      </Router>
      </PagesContainerv2>
  </div>
  )
}

export default App