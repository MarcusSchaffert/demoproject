import React, { useState } from 'react';
import { UpdateUserPassword } from '../DTOs/UpdateUserPassword';
import { UserService } from './UserService';

interface UpdatePasswordModalProps {
  userId: string;
  isOpen: boolean;
  onClose: () => void;
}

const UpdatePasswordModal: React.FC<UpdatePasswordModalProps> = ({ userId, isOpen, onClose }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdatePassword = async () => {
    try {

      const data: UpdateUserPassword = {
        password: newPassword,
        confirmPassword: confirmPassword,
      };
      
      await UserService.updateUserById(userId, data);

      alert('Password updated successfully!');
      setNewPassword('');
      setConfirmPassword('');
      onClose();
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Failed to update password');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-xl font-semibold mb-4">Update Password</h2>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleUpdatePassword}
        >
          Submit
        </button>
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdatePasswordModal;
