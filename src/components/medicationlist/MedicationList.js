import { Link } from 'react-router-dom'

// styles
import './MedicationList.css'

const MedicationList = ({ medications }) => {

  return (
    <div className="medication-list">
       {medications.map((medication) => (
           <Link to={`/medications/${medication.id}`}
           className="card" 
           style={{textDecoration: "none"}} 
           key={medication.id} >
              <h3>{medication.name}</h3>
              <p>Dosage: <span>{medication.dosage}</span></p>
              <p>Type: <span>{medication.dosageForm}</span></p>
              <p>Instructions: <span>{medication.instructions.substring(0, 50)}...</span></p>
            </Link>
       ))}
    </div>
  )
}

export default MedicationList