import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider'
import Home from './components/home/Home'
import Footer from './components/Footer';

function App() {
  return (
  <React.Fragment>
        <Header />
        <Slider />
        <Home />
        <Footer />
  </React.Fragment>
  );
}

export default App;
