import { useState } from "react"
import { useHistory } from 'react-router-dom'
import { projectFirestore } from "../firebase/config"

const useCreate = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  const create = async (doc) => {
    setIsPending(true)

    try {
      await projectFirestore.collection("medications").add(doc)
      history.push("/dashboard")
    } catch(err) {
        setIsPending(false)
        setError("Sorry 😞 we can't add your medication right now...")
    }
  }

  return { error, isPending, create }
}

export { useCreate }