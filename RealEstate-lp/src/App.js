import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import {BrowserRouter as Router } from 'react-router-dom';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = ()=> {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
