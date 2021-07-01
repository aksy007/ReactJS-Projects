import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Chapters from './components/Chapters';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Chapters />
      <Footer />
    </div>
  );
}

export default App;
