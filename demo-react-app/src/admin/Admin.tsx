import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Users from './Users/Users';
import UserDetails from './Users/UserDetails';

const Admin: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default Admin;
