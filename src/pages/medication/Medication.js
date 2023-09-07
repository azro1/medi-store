import { useParams, useHistory, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'

// styles
import './Medication.css'

const Medication = () => {
const [medication, setMedication] = useState(null)
const [isPending, setIsPending] = useState(false)
const [error, setError] = useState(false)
const { id } = useParams()
const history = useHistory()
const { mode } = useTheme()

// delete medication
const handleDelete = async (id) => {
  try {
    await projectFirestore.collection("medications").doc(id).delete()
    history.push('/')
  } catch (err) {
      console.log(err.message)
  }
}

useEffect(() => {
  setIsPending(true)
  projectFirestore.collection("medications").doc(id).get().then((doc) => {
    if (doc.exists) {
      setIsPending(false)
      setMedication(doc.data())
    } else {
      setIsPending(false)
      setError("Sorry! That medication doesn't exist...")
    }
})
}, [id])

useEffect(() => {
  if (error) {
    setTimeout(() => {
      history.push('/')
    }, 2000)
  }
}, [error, history])

  return (
    <div className={`medication ${mode}`}>
        {isPending && <p className={`loading ${mode}`}>please wait...</p>}
        {error && <p style={{position: "relative", top: "1rem"}} className={`error ${mode}`}>{error}</p>}
        {medication && (
        <>
        <h2 className={`page-title ${mode}`}>{medication.name}</h2>
  
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
              <Link className="editBtn" to={`/edit/${id}`} >Edit</Link>
              <button className="delete" onClick={() => handleDelete(id)} >Delete</button> 
          </div>
        </>
       )}
    </div>
  )
}

export default Medication