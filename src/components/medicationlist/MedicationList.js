import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

// styles
import './MedicationList.css'

const MedicationList = ({ medications }) => {
  const { mode, color } = useTheme()

  return (
    <div className='medication-list'>
      {medications.map((medication) => (
        <Link
          to={`/medications/${medication.id}`}
          className={`card ${mode}`}
          style={{ textDecoration: 'none' }}
          key={medication.id}
        >
          <h3 style={{ color: color === '#232524' ? '#AC926B' : color }}>
            {medication.name}
          </h3>
          <p>
            Dosage: <span>{medication.dosage}</span>
          </p>
          <p>
            Type: <span>{medication.dosageForm}</span>
          </p>
          <p>
            Instructions:{' '}
            <span>{medication.instructions.substring(0, 50)}...</span>
          </p>
        </Link>
      ))}
    </div>
  );
}

export default MedicationList