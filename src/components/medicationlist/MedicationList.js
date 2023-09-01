import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

// styles
import './MedicationList.css'

const MedicationList = ({ medications }) => {
  const { mode } = useTheme()

  if (medications.length === 0) {
    // dynamically added class for mode state to error which we check for and style differently in index.css global stylesheet 
    return <p className={`error ${mode}`}>Click "Add Medication" to start adding your medications</p>
  }

  return (
    <div className="medication-list">
       {medications.map((medication) => (
           <Link to={`/medications/${medication.id}`}
           // dynamically added class for mode state to card which we check for and style differently in css
           className={`card ${mode}`} 
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