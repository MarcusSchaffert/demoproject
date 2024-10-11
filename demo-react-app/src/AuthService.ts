import api from "./api";

interface LoginResponse {
  token: string;
}

export class AuthService {
  static async login(email: string, password: string): Promise<void> {
    try {
      const response = await api.post<LoginResponse>(
        `auth/login`,
        {
          email,
          password,
        },
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("Invalid credentials");
    }
  }

  static logout() {
    localStorage.removeItem("token");
  }
}
