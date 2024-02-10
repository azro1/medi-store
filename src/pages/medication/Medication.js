import { useParams, Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useFetchDoc } from '../../hooks/useFetchDoc'
import { useDelete } from '../../hooks/useDelete'

// styles
import './Medication.css'

const Medication = () => {
  const { id } = useParams()
  const { mode, color } = useTheme()
  const { medication, error, isPending } = useFetchDoc(id)
  const { deleteDoc } = useDelete()

  // delete medication
  const handleDelete = async (id) => {
    deleteDoc(id)
  }
  
  return (
    <div className={`medication ${mode}`}>
        {isPending && <p className={`loading ${mode}`}>please wait...</p>}
        {error && <p style={{position: "relative", top: "1rem"}} className={`error ${mode}`}>{error}</p>}
        {medication && (
        <>
        <h2 className={`page-title ${mode}`} style={{ color: color === '#232524' ? '#AC926B' : color }}>{medication.name}</h2>

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
              <p>Storage: <span>{medication.storage}</span></p>
              <p>Advice: <span>{medication.warning}</span></p>
            </section>
          </div>
          <div className="buttons">
              <Link className="edit btn" to={`/edit/${id}`} >Edit</Link>
              <button className="delete btn" onClick={() => handleDelete(id)} >Delete</button> 
          </div>
        </>
       )}
    </div>
  )
}

export default Medication