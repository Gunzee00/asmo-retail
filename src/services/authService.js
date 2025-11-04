import users from "../data/users.json";

export const authService = {
  login: async (email, password) => {
    // simulasi delay seperti API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Email atau password salah");
    }

    // Simulasi token
    const token = btoa(`${user.email}:${Date.now()}`);
    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_user", JSON.stringify(user));

    return { token, user };
  },

  logout: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    // arahkan ke halaman login
    window.location.href = "/";
  },

  getCurrentUser: () => {
    const user = localStorage.getItem("auth_user");
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("auth_token");
  },
};
