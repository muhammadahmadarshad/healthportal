import React from 'react';
import Login from './Components/Login/Login';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Login/>

      </Router>
      
    </div>
  );
}

export default App;
