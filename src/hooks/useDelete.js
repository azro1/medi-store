import { useHistory } from 'react-router-dom'
import { projectFirestore } from "../firebase/config"

const useDelete = () => {
  const history = useHistory()

  // delete document
  const deleteDoc = async (id) => {
     try {
       await projectFirestore.collection("medications").doc(id).delete()
       history.push('/dashboard')
     } catch (err) {
         console.log(err.message)
     }
  }
  return { deleteDoc }
}

export { useDelete }