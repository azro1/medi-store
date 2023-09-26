import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const login = async(email, password) => {
    setError(null)
    setIsPending(true)
      
    // log user in
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)

        // dispatch login action
        dispatch({ type: 'LOGIN', payload: response.user })

        // update state
        if (!isCancelled) {
            setIsPending(false)
            setError(null)
        }

    } catch (err) {
        if (!isCancelled) {
            if (err.code === "auth/internal-error") {
                setError("Invalid Login Credentials.");
            } else {
              setError(err.message);
              console.log(err.message)
            }
            setIsPending(false)
        }
      }
    }
    
    // if the component that uses this hook unmouts this cleanup function fires 
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, login }

}

export { useLogin }