import { projectFirestore } from "../firebase/config"
import {useAuthContext} from './useAuthContext'
import { useState, useEffect, useRef } from "react"

const useCollection = (collection, _orderBy) => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const [documents, setDocuments] = useState(null)
  const { user } = useAuthContext()

  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    setIsPending(true)
    let ref = projectFirestore.collection(collection)

    if (orderBy) {
      ref = ref.orderBy(...orderBy)
    }
      if (user) {
        ref = ref.where('uid', '==', user.uid)

        const unSubscribe = ref.onSnapshot((snapshot) => {
          if (snapshot.empty) {
              setError(`You don't have any meds ${user.displayName}! Click "Add Medication" to get started...`)
              setIsPending(false)
          } else {
              let results = []
              snapshot.docs.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() })
              })
              setDocuments(results)
              setIsPending(false)
          }
        }, (error) => {
            console.log(error)
            setIsPending(false)
            setError("Oh no, 😞 let's try that again...")
        })
        return () => unSubscribe()
      }
  }, [user, collection, orderBy])
  
  return { isPending, error, documents }
}

export { useCollection }