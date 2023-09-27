import { useLocation } from 'react-router-dom'
import MedicationList from '../../components/medicationlist/MedicationList'
import { useTheme } from '../../hooks/useTheme'
import { useSearch } from '../../hooks/useSearch'

// styles
import './Search.css'

const Search = () => {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  
  const query = queryParams.get('q')  
  const { mode } = useTheme()
  const { data, error, isPending } = useSearch(query)

  return (
    <div className="search">
       <h2 className={`page-title ${mode}`}>Medications including "{query}"</h2>
       {error && <p className={`error ${mode}`}>{error}</p>}
       {isPending && <p className={`loading ${mode}`}>please wait...</p>}
       {data && <MedicationList medications={data} />}
    </div>
  )
}

export default Search