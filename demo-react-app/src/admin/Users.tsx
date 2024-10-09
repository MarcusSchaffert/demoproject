import React from 'react';
import { Link } from 'react-router-dom';

const Users: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Admin Users</h2>
      <div className="flex justify-center mt-4">
        <Link to="/">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
