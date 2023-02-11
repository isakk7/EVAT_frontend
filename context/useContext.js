import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    auth: false,
    name: "",
    email: ""
  });
  const setUserInfo = (user) => {
    const newUser = {
      name: user.name,
      email: user.email,

    };
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ user, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;