
// ⭐ "useAuth" Hook (Youtube Clone-Flex frontend Starter Code)
//      => Gives access to the current signed-in user's info & JWT token 
//         (It will be important to get the JWT token for all HTTP requests that you make from your React application to protected endpoints.)
        //!🔑 "useAuth" can only be used in a protected page/route!--Only returns user object and token if there is a user signed in


import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { user, token } = useContext(AuthContext);
  return [user, token];
};

export default useAuth;
