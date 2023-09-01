import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import MedicationList from '../../components/medicationlist/MedicationList'

// styles
import './Search.css'

const Search = () => {
  // Accessing the query parameter from Searchbar page component using useLocation hook and using it to query the data using the custom hook. Once results come back we then re-use the MedicationList component in this file passing the data through to the medications prop where we are already using it (in MedicationList.js) to loop through and output data passed to it from the Home page component

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  
  const query = queryParams.get('q')  
  const { data, isPending, error } = useFetch(`http://localhost:3000/medications?q=${query}`)

  if (!JSON.stringify(data).includes(query)) {
    return <p className="error">No medications to load...</p>
  }
  
  return (
    <div className="search">
       <h2 className="page-title">Medications including "{query}"</h2>
       {error && <p className="error">{error}</p>}
       {isPending && <p className="loading">please wait...</p>}
       {data && <MedicationList medications={data} />}
    </div>
  )
}

export default Search