import React from 'react';

import Header from './Header.js'
import Footer from './Footer.js'
import Hero from './Hero.js'
import './Home.css'

function Home() {
  return (
    <div className="home">
        <Header></Header>
        <Hero></Hero>
        <Footer></Footer>
    </div>
  );
}

export default Home;  