


import React, { useState, useEffect } from 'react';
import { UserDTO } from '../DTOs/UserDTO';

const UsersList: React.FC = () => {
  // Dummy data for now
  const [users, setUsers] = useState<UserDTO[]>([
    {
      UserID: '1',
      UserType: 'Admin',
      UserEmail: 'admin@example.com',
      DateJoined: new Date('2023-01-01'),
      DateLastUpdated: new Date('2023-05-10')
    },
    {
      UserID: '2',
      UserType: 'User',
      UserEmail: 'user@example.com',
      DateJoined: new Date('2023-02-15'),
      DateLastUpdated: new Date('2023-06-12')
    }
  ]);

  // In future, fetch data from API here
  useEffect(() => {
    // TODO: Implement API call to fetch users
    // fetchUsers();
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
              <tr key={user.UserID} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{user.UserID}</td>
                <td className="py-3 px-6 text-left">{user.UserType}</td>
                <td className="py-3 px-6 text-left">{user.UserEmail}</td>
                <td className="py-3 px-6 text-left">{user.DateJoined.toDateString()}</td>
                <td className="py-3 px-6 text-left">{user.DateLastUpdated.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
