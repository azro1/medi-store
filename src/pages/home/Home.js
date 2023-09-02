import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
// import projectFirestore object from firebase config file
import { projectFirestore } from '../../firebase/config'

// styles
import './Home.css'

// components
import MedicationList from '../../components/medicationlist/MedicationList'

const Home = () => {
  const { mode } = useTheme()
  // same 3 properties that we're being returned from hook but now replaced using state
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  // we use useEffect to connect to firestore
  useEffect(() => {
    setIsPending(true)
    // fetch data from firestore - collection connects to a collection in our database - to get all of the data from that collection we use a method called get - this fetches a snapshot of the collection and takes some time - it's asynchronous and returns a promise - this snapshot contains all of the documents inside the collection
    projectFirestore.collection("medications").get().then((snapshot) => {
      if (snapshot.empty) {
        setError("No medications to load...")
        setIsPending(false)
      } else {
        // for each document we're constructing a new object which consists of all of the data for that document and also the id (which we need as the key prop) and we're pushing that inside the results array 
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() })
        })
        // we update our local data to be the results
        setData(results)
        setIsPending(false)
      }
    }).catch((err) => {
         setError(err.message)
         setIsPending(false)
    })
  }, [])

  return (
    <div className="home">
       <h1 className={`page-title ${mode}`}>Your Medications</h1>
       {error && <p className={`error ${mode}`}>{error}</p>}
       {isPending && <p className={`loading ${mode}`}>please wait...</p>}
       {data && <MedicationList medications={data} />}
    </div>
  )
}

export default Home
