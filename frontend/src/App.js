
import './App.css';

import Layout from './components/Layout';
import HomePage from './components/HomePage';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App"  >
      <BrowserRouter>
      <Routes>
       
        <Route path="admin" element={<HomePage />} />
        
        
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
