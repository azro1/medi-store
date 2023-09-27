import { projectFirestore } from '../firebase/config'
import { useState, useEffect } from 'react'

const useSearch = (query) => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection("medications").where('name', '==', query).get().then((snapshot) => {
      if (snapshot.empty) {
        if (!isCancelled) {
          setError("No medications to load...")
          setIsPending(false)
        }
      } else {
          let results = []
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() })
          })
          if (!isCancelled) {
            setData(results)
            setError(false)
            setIsPending(false)
          }
        }
    })
    // added cleanup function
    return () => setIsCancelled(true)
  }, [query, isCancelled])

  return { data, error, isPending}
}

export { useSearch }