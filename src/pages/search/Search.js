import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import MedicationList from '../../components/medicationlist/MedicationList'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Search.css'

const Search = () => {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  
  const query = queryParams.get('q')  
  const { data, isPending, error } = useFetch(`http://localhost:3000/medications?q=${query}`)
  const { mode } = useTheme()

  if (!JSON.stringify(data).includes(query)) {
    return <p className={`error ${mode}`}>No medications to load...</p>
  }
  
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