import { useLocation } from 'react-router-dom'
import MedicationList from '../../components/medicationlist/MedicationList'
import { useTheme } from '../../hooks/useTheme'

// import project firstorw
import { projectFirestore } from '../../firebase/config'
import { useState, useEffect } from 'react'

// styles
import './Search.css'

const Search = () => {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  
  const query = queryParams.get('q')  
  const { mode } = useTheme()

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  
  // we use useEffect to connect to firestore
  useEffect(() => {
    setIsPending(true)
    // query data from firestore - we use collection again to connect to the medications collection in our database but this time we want to look inside our collection for specific documents and to do that and perform this query is we use a method called where between the collection and the get method and this is where we specify what we want to check for - we only want to bring back some of the documents - this method takes in 3 arguments:

    // 1. the field in the document that we want to check
    // 2. how we want to evaluate the check
    // 3. what value we want it to equal

    projectFirestore.collection("medications").where('name', '==', query).get().then((snapshot) => {
      // we check again for the empty property on the snapshot and throw a custom error
      if (snapshot.empty) {
        setError("No medications to load...")
        setIsPending(false)
      } else {
        // if snapshot has a value for each document we're constructing a new object which consists of all of the data for that document and also the id (which we need as the key prop) and we're pushing that inside the results array 
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() })
        })
        // we update our local data to be the results
        setData(results)
        setError(false)
        setIsPending(false)
      }
    })
  }, [query])

  return (
    <div className="search">
       <h2 className={`page-title ${mode}`}>Medications including "{query}"</h2>
       {error && <p className={`error ${mode}`}>{error}</p>}
       {isPending && <p className={`loading ${mode}`}>please wait...</p>}
       {data && <MedicationList medications={data} />}
    </div>
  )
}

export default Search