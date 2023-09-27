import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from '../firebase/config'

const AuthContext = createContext()

const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false
})

// First we add a new property to our initial state object called authIsReady. We use useEffect to fire code once when app first loads in the browser and we use this method which connects to firebase to perfom a check to see if we have a user currently logged in or not and firebase sends back an initial response which is that user object which we get access to inside the callback and it's either going to contain the user who is logged in or null. 

// Based on this check we can dispatch a new action and update our user property appropriately. Once we've performed the check we're also going to set the authIsReady property to be true because then we know for sure whether we have a user or not and it's at this point we want to start rendering our components to the DOM inside of the App component.

// The callback fires once when we first connect to firebase but then also everytime there is a change in authentication state - so if in the future a user has logged out - it performs the check, sends back that user object and fires the callback. However, we don't need to do this - we only need to perform the check once initially to check for an authenticated user so we cancel the subscription to authentication status after the initial check by using an unsubscribe function

useEffect(() => {
  const unsub = projectAuth.onAuthStateChanged((user) => {
    dispatch({ type: 'AUTH_IS_READY', payload: user })
    unsub()
  })
}, [])

console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }} >
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }