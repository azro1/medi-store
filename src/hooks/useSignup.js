import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    // sign user up
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password)
        // console.log(response.user)

        // if can't connect to network
        if (!response) {
          throw new Error('could not sign user up')
        }
        // add displayName to user
        await response.user.updateProfile({ displayName })

        // dispatch login action
        dispatch({ type: 'LOGIN', payload: response.user })

        setError(null)
        setIsPending(false)

    } catch (err) {
        setError(err.message)
        setIsPending(false)
        console.log(err.message)
    }
  }

  return { error, isPending, signup }
}

export { useSignup }