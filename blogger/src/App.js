import { useSelector } from 'react-redux';
import './App.css';
import AuthenticationPage from './Components/AuthenticationPage';
import Blog from './Components/Blog';
import Navbar from './Components/NavBar';
import { selectSignedIn } from './StateManager/userSlice';

function App() { 
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      <Navbar />
      <AuthenticationPage />
      {isSignedIn && <Blog />}
    </div>
  );
}

export default App;


        