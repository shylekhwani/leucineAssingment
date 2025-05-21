import { useContext } from "react";

import AuthContext from "../../context/authContext/authContext";

export const useAuthContext = function() {
     return useContext(AuthContext);
};