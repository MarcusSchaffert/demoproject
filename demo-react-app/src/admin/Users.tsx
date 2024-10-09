import React from 'react';
import { Link } from 'react-router-dom';
import UsersList from './Users/UsersList';

const Users: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Admin Users</h2>
      <div className="flex justify-center mt-4">
        <Link to="/">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Back to Home</button>
        </Link>
      </div>
      <UsersList />
    </div>
  );
};

export default Users;
