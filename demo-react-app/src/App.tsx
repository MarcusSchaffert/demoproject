import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';

const Admin = React.lazy(() => import('./admin/Admin'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
