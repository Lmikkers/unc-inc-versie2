import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login'; 
import Dashboard from './pages/dashboard'; 
import Home from './pages/home'; 

import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />


        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
