import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign user out
    try {
      await projectAuth.signOut()

      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelled) {
          setError(null)
          setIsPending(false)
      }
    } catch (err) {
        if (!isCancelled) {
            setError(err.message)
            setIsPending(false)
            console.log(err.message)
        }
    }
  }

  useEffect(() => {
    // if the component that uses this hook unmouts this cleanup function fires 
    return () => setIsCancelled(true)
  }, [])

  return { error, isPending, logout }
}

export { useLogout }