import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  isLoggedIn: true,
  login: () => {},
  logout: () => {}
})

export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    navigate("board");
    setIsLoggedIn(true); 
  }

  const logout = () => {
    navigate("login");
    setIsLoggedIn(false); 
  }

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;