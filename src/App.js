import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home'
import Footer from './components/Footer';

function App() {
  return (
  <React.Fragment>
        <Home />
        <Footer />
  </React.Fragment>
  );
}

export default App;
