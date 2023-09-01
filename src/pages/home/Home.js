import useFetch from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Home.css'

// components
import MedicationList from '../../components/medicationlist/MedicationList'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3000/medications')
  const { mode } = useTheme()

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
