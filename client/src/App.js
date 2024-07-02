import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { Home } from './components/Home.js';
import './App.css';
import { Navbar } from './components/Navbar';
import {Meeting} from './components/Meeting.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/meeting/:meetingUrl' element={<Meeting />} />
        </Routes >
      </Router>
      
    </div>
  );
}

export default App;