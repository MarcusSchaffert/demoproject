import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserDTO } from '../DTOs/UserDTO';
import UpdatePasswordModal from './UpdateUserPasswordModal';
import { UserService } from './UserService';

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<UserDTO | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUser = async () => {
    try {
        if(!userId) return;
        const user = await UserService.getUserById(userId);
        setUser(user);
    } catch (error) {
        console.error('Error fetching user:', error);
    }
};

  useEffect(() => {
    fetchUser();
  }, [userId]);

  if (!user) return <div>Loading user details...</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p><strong>User ID:</strong> {user.userID}</p>
        <p><strong>User Type:</strong> {user.userType}</p>
        <p><strong>Email:</strong> {user.userEmail}</p>
        <p><strong>Date Joined:</strong> {new Date(user.dateJoined).toDateString()}</p>
        <p><strong>Date Last Updated:</strong> {new Date(user.dateLastUpdated).toDateString()}</p>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => setIsModalOpen(true)}
        >
          Update Password
        </button>
      </div>
      <UpdatePasswordModal 
        userId={user.userID} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default UserDetails;
