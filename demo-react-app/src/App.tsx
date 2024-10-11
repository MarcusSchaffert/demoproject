import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

const Admin = React.lazy(() => import('./admin/Admin'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/admin/*" element={<PrivateRoute component={Admin} />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
