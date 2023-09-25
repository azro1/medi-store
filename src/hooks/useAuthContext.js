import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const context = useContext(AuthContext)
 
  if (!context) {
    throw new Error("useAuthContext must used inside an AuthProvider")
  }

  return context
}

export { useAuthContext }