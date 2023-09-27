import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { projectFirestore } from "../firebase/config"

const useFetchDoc = (id) => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [medication, setMedication] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection("medications").doc(id).get().then((doc) => {
      if (doc.exists) {
        if (!isCancelled) {
            setIsPending(false)
            setMedication(doc.data())
        }
      } else {
          if (!isCancelled) {
            setError("Sorry! That medication doesn't exist...")
            setIsPending(false)
          }
      }
    })
    // added cleanup function
    return () => setIsCancelled(true)
    }, [id, isCancelled])

    useEffect(() => {
      if (error) {
        setTimeout(() => {
        history.push('/dashboard')
        }, 2000)
      }
    }, [error, history])

    return { medication, isPending, error }
}

export { useFetchDoc }