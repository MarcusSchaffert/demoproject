import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Users from './Users';

const Admin: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Admin;
