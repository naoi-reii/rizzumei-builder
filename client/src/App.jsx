import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './contexts/ResumeContext';
import Home from './components/Home'; // We'll create this or use a layout

function App() {
  return (
    <ResumeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ResumeProvider>
  );
}

export default App;
