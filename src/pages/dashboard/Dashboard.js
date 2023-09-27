import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'

// styles
import './Dashboard.css'

// components
import MedicationList from '../../components/medicationlist/MedicationList'

const Dashboard = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const { mode } = useTheme()
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection("medications").get().then((snapshot) => {
      if (snapshot.empty) {
        if (!isCancelled) {
          setError('Click "Add Medication" to start adding your medications')
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
          setError("Oh no 😞 so sorry! Please try again later... ")
          setIsPending(false)
        }
    })
    // added cleanup function
    return () => setIsCancelled(true)
  }, [isCancelled])

  return (
    <div className="dashboard">
       <h1 className={`page-title ${mode}`}>Your Medications</h1>
       {error && <p className={`error ${mode}`}>{error}</p>}
       {isPending && <p className={`loading ${mode}`}>please wait...</p>}
       {data && <MedicationList medications={data} />}
    </div>
  )
}

export default Dashboard
