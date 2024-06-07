import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Create from './components/Create';
import Edit from './components/Edit';
import Read from './components/Read';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Create' element={<Create />} />
        <Route path='/:id' element={<Edit />} />
        <Route path='/Read' element={<Read />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
