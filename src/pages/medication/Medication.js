import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

// styles
import './Medication.css'

const Medication = () => {
const { id } = useParams()
const { data: medication, isPending, error } = useFetch(`http://localhost:3000/medications/${id}`)

  return (
    <div className="medication">
       {isPending && <p className="loading">please wait...</p>}
       {error && <div className="error">{error}</div>}
       {medication && (
        <div>{medication.name}</div>
       )}
    </div>
  )
}

export default Medication
