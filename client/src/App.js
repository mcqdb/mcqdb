import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Home from './Home.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>   
        <Home></Home>     
      <Footer></Footer>
    </div>
  );
}

export default App;
