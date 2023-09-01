import { useParams, useHistory, Link } from 'react-router-dom'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

// styles
import './Medication.css'

const Medication = () => {
const { id } = useParams()
const { data: medication, isPending, error } = useFetch(`http://localhost:3000/medications/${id}`)

const { deleteData, data } = useFetch(`http://localhost:3000/medications/${id}`, "DELETE")
const history = useHistory()

const handleDelete = async () => {
  deleteData()
}

useEffect(() => {
  if (data) {
     history.push("/")
  }
  if (error) {
    setTimeout(() => {
      history.push('/')
    }, 2000)
  }  
}, [data, error, history])

  return (
    <div className="medication">
       {isPending && <p className="loading">please wait...</p>}
       {error && <div className="error">{error}</div>}
       {medication && (
        <>
        <h2 className="page-title">{medication.name}</h2>
  
        <div className="info">
            <div className="dates">
              <p>Start Date: <span>{medication.startDate}</span></p>
              <p>End Date: <span>{medication.endDate}</span></p>
            </div>

            <section>
              <p>Dosage: <span>{medication.dosage}</span></p>
              <p>Type: <span>{medication.dosageForm}</span></p>
              <p>To be taken: <span>{medication.frequency}</span></p>
              <p>Administration: <span>{medication.adminRoute}</span></p>
            </section>

            <div className="instructions">
              <p>Instructions: <span>{medication.instructions}</span></p>
            </div>

            <section>
              <p>Prescribing Dr: <span>{medication.doctorName}</span></p>
              <p>Email: <span>{medication.doctorEmail}</span></p>
              <p>Pharmacy: <span>{medication.pharmacyName}</span></p> 
              <p>Email: <span>{medication.pharmacyEmail}</span></p>
            </section>

            <section>
              <p>Contains: {medication.contains.map((ingredient) =>(
                    <span key={ingredient}>
                        {ingredient}
                    </span>
                ))}
                </p> 
              <p>Side Effects: <span>{medication.sideEffects}</span></p>
              <p>Advice: <span>{medication.warning}</span></p>
            </section>
          </div>

          <div className="buttons">
              <button className="delete" onClick={handleDelete} >Delete</button> 
              {/* added edit Link component styled as a button and set its path using id dynamic variable */}
              <Link className="editBtn" to={`/edit/${id}`} >Edit</Link>
          </div>
          
        </>
       )}
    </div>
  )
}

export default Medication