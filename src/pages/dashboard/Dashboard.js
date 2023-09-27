import { useTheme } from '../../hooks/useTheme'
import { useFetch } from '../../hooks/useFetch'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Dashboard.css'

// components
import MedicationList from '../../components/medicationlist/MedicationList'

const Dashboard = () => {
  const { mode } = useTheme()
  const { error, isPending, data } = useFetch()
  const { user } = useAuthContext()

  return (
    <div className="dashboard">
       {user && <h1 className={`page-title ${mode}`}>{user.displayName}, here's your meds...</h1>}
       {error && <p className={`error ${mode}`}>{error}</p>}
       {isPending && <p className={`loading ${mode}`}>please wait...</p>}
       {data && <MedicationList medications={data} />}
    </div>
  )
}

export default Dashboard
