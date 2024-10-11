import React, { useState, useEffect } from "react";
import { UserDTO } from "../DTOs/UserDTO";
import { Link } from "react-router-dom";
import { UserService } from "./UserService";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);

  const fetchUsers = async () => {
    try {
      const users = await UserService.getAllUsers();
      setUsers(users);
    } catch (error) {
      console.log("Error fetching users:", error);

    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Users List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">User ID</th>
              <th className="py-3 px-6 text-left">User Type</th>
              <th className="py-3 px-6 text-left">User Email</th>
              <th className="py-3 px-6 text-left">Date Joined</th>
              <th className="py-3 px-6 text-left">Date Last Updated</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user) => (
              <tr
                key={user.userID}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <Link to={`/admin/users/${user.userID}`} className="text-blue-600 hover:underline">
                    {user.userID}
                  </Link>
                </td>
                <td className="py-3 px-6 text-left">{user.userType}</td>
                <td className="py-3 px-6 text-left">{user.userEmail}</td>
                <td className="py-3 px-6 text-left">
                  {new Date(user.dateJoined).toDateString()}
                </td>
                <td className="py-3 px-6 text-left">
                  {new Date(user.dateLastUpdated).toDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
