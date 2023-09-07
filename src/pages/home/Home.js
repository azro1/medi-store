import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'

// styles
import './Home.css'

// components
import MedicationList from '../../components/medicationlist/MedicationList'

const Home = () => {
  const { mode } = useTheme()
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection("medications").get().then((snapshot) => {
      if (snapshot.empty) {
        setError('Click "Add Medication" to start adding your medications')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }).catch((err) => {
         setError("Oh no 😞 so sorry! Please try again later... ")
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
