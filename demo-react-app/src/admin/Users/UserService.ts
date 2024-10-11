import api from '../../api';
import { UserDTO } from '../DTOs/UserDTO';

export class UserService {

  static async getAllUsers(): Promise<UserDTO[]> {
    try {
      const response = await api.get("users/GetUsers");
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  static async getUserById(userId: string): Promise<UserDTO> {
    try {
      const response = await api.get(`users/GetUserByID/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
  }

  static async updateUserById(userId: string, data: any): Promise<void> {
    try {
      await api.put(`users/UpdateUser/${userId}`, data);
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }
  }
}
