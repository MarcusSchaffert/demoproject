import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "./AuthService";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();

    navigate("/login");
  };

  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center">
        Welcome to the Admin Portal
      </h1>

      <div className="flex justify-center mt-4">
        <Link to="/admin/users">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Admin Users
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
