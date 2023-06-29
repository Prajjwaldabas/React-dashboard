
import './App.css';
import HomePage from './Pages/HomePage';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoardPage from './Pages/DashBoardPage';




function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dashboard" element={< DashBoardPage/>} />
      </Routes>
    </div>
  
  );
}

export default App;
