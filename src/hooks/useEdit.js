import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { projectFirestore } from '../firebase/config'

const useEdit = (id) => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const history = useHistory()

  // get document by it's id
  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection("medications").doc(id).get().then((doc) => {
      if (!isCancelled) {
        setData(doc.data())
        setIsPending(false)
      }
    }).catch((err) => {
      if (!isCancelled) {
        setError("Sorry 😞 we can't get that medication right now...")
        setIsPending(false)
      }
    })
    // added cleanup function
    return () => setIsCancelled(true)
  }, [id, isCancelled])

  // update document
  const update = async (obj) => {
     setIsPending(true)
     try {
        await projectFirestore.collection("medications").doc(id).update(obj)
        history.push("/dashboard")
        setIsPending(false)
     } catch (err) {
        setError("Sorry 😞 we can't update your medication right now...")
        setIsPending(false)
     }
  }
  return { data, isPending, error, update }
}

export { useEdit }