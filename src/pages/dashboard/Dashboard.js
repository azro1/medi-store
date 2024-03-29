import { useTheme } from '../../hooks/useTheme'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Dashboard.css'

// components
import MedicationList from '../../components/medicationlist/MedicationList'

const Dashboard = () => {
  const { mode } = useTheme()
  const { user } = useAuthContext()

  const { error, isPending, documents } = useCollection("medications", ['createdAt', 'desc'])

  return (
    <div className="dashboard">
       {user && <h1 className={`page-title ${mode}`}>{user.displayName}'s meds</h1>}
       {isPending && <p className={`loading ${mode}`}>please wait...</p>}
       {error && <p className={`error ${mode}`}>{error}</p>}
       {documents && <MedicationList medications={documents} />}
    </div>
  )
}

export default Dashboard
