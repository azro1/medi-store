import { useLocation } from 'react-router-dom'
import MedicationList from '../../components/medicationlist/MedicationList'
import { useTheme } from '../../hooks/useTheme'
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
  
  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection("medications").where('name', '==', query).get().then((snapshot) => {
      if (snapshot.empty) {
        setError("No medications to load...")
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() })
        })
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