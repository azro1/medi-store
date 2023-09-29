import { useState, useEffect, useRef } from "react"
import { projectFirestore } from "../firebase/config"
import {useAuthContext} from './useAuthContext'


const useFetch = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { user } = useAuthContext()


  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    setIsPending(true)
    let ref = projectFirestore.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = ref.onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError(`You don't have any meds ${user.displayName}! Click "Add Medication" to get started...`)
        setIsPending(false)
      } else {
        let results = [] 
        snapshot.docs.forEach((doc) => {
          results.push({...doc.data(), id: doc.id})
        })
        // update state
        setDocuments(results)
        setIsPending(false)
        setError(null)
      }
    }, (error) => {
      console.log(error)
      setIsPending(false)
      setError("Oh no, 😞 let's try that again...")
    })

  // unsubscribe on unmount
  return () => unsubscribe()

  }, [collection, query, orderBy, user.displayName])

  return { documents, error, isPending }
}

export { useFetch }