 import { useAuthContext } from "../../hooks/context/useContext";

 export const AdminOnly = ({ children }) => {
    const { auth } = useAuthContext();
  
  if (auth?.user?.role !== 'Admin') return <Navigate to="/unauthorized" />;
  return children;
};
