import { createContext, useReducer } from "react";

const AuthContext = createContext()

const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })

console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }} >
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }