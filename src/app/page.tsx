import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าแรกเป็น Register */}
        <Route path="/" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
