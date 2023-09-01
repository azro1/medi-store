import useFetch from '../../hooks/useFetch'

// styles
import './Home.css'

const Home = () => {
  const { data: medications, isPending, error } = useFetch('http://localhost:3000/medications')

  return (
    <div className="home">
       {error && <p className="error">{error}</p>}
       {isPending && <p>please wait...</p>}
       {medications && medications.map((medication) => (
          <div key={medication.id}>
              <h3>{medication.name}</h3>
              <p>Dosage: <span>{medication.dosage}</span></p>
              <p>Type: <span>{medication.dosageForm}</span></p>
          </div>
       ))}
    </div>
  )
}

export default Home
