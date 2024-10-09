import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
      <div className="App">
        <h1 className="text-2xl font-bold text-center">Welcome to the Admin Portal</h1>
        
        <div className="flex justify-center mt-4">
          <Link to="/admin/users">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Go to Admin Users</button>
          </Link>
        </div>
      </div>
  );
};

export default Dashboard;
