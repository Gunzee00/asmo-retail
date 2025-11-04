import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );

  const login = async (email, password) => {
    try {
      const res = await fetch("/data/users.json");
      const users = await res.json();

      const found = users.find(
        (u) => u.email === email && u.password === password
      );

      if (found) {
        localStorage.setItem("user", JSON.stringify(found));
        setUser(found);
        return { success: true };
      } else {
        return { success: false, message: "Email atau kata sandi salah" };
      }
    } catch (err) {
      return { success: false, message: "Terjadi kesalahan saat login" };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
