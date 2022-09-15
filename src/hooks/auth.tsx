import React, { createContext, useContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Auth {
  token: string;
  user: User;
}

interface AuthContextData {
  user: User;
  login(credentials: Auth): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [data, setData] = useState<Auth>(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as Auth;
  });

  const login = async (userData: Auth) => {
    const { token, user } = userData;
    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData.user));
    setData({ token, user });
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("You need to use an AuthProvider");
  }

  return context;
}
