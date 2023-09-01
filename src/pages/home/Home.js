import useFetch from '../../hooks/useFetch'

// styles
import './Home.css'

// components
import MedicationList from '../../components/medicationlist/MedicationList'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3000/medications')

  return (
    <div className="home">
       {error && <p className="error">{error}</p>}
       {isPending && <p>please wait...</p>}
       {data && <MedicationList medications={data} />}
    </div>
  )
}

export default Home
