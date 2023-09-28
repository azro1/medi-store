import { useState, useEffect } from "react"
import { projectFirestore } from "../firebase/config"
import {useAuthContext} from './useAuthContext'

const useFetch = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)
  const { user } = useAuthContext()

  useEffect(() => {
    setIsPending(true)
      if (user) {
        projectFirestore.collection("medications").where('uid', '==', user.uid).get().then((snapshot) => {
          if (snapshot.empty) {
            if (!isCancelled) {
              setError(`You don't have any meds ${user.displayName}! Click "Add Medication" to get started...`)
              setIsPending(false)
            }
          } else {
            let results = []
            snapshot.docs.forEach((doc) => {
              results.push({ id: doc.id, ...doc.data() })
            })
            if (!isCancelled) {
              setData(results)
              setIsPending(false)
            }
          }
        }).catch((err) => {
            if (!isCancelled) {
              setError("Oh no, 😞 let's try that again...")
              setIsPending(false)
            }
        })
      }

    // added cleanup function
    return () => setIsCancelled(true)
  }, [isCancelled, user])
  
  return { isPending, error, data }
}

export { useFetch }