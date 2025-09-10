import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(); 

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser && !user) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

   function login(username, password) {

    if (password === "123") {
        const loggedUser = { username };
        setUser(loggedUser);
        localStorage.setItem("user", JSON.stringify(loggedUser));
        return true;
    }
    return false;
   }

   function logout() {
    setUser(null);
    localStorage.removeItem("user");
   }

   return (
    <AuthContext.Provider value={{ user, login, logout }}>
        {children}
    </AuthContext.Provider>
   );
}