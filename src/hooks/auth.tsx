import React, { useReducer, createContext, useContext } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  user: null as any,
};

interface MyToken {
  name: string;
  exp: number;
}

interface User {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface AuthContextData {
  user: User;
  login(credentials: User): void;
  logout(): void;
}

if (localStorage.getItem("token")) {
  const decodedToken = jwtDecode<MyToken>(localStorage.getItem("token")!!);

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function authReducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData: User) => {
    localStorage.setItem("token", userData.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
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
