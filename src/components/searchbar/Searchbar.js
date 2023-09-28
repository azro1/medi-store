import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Searchbar.css'

const Searchbar = () => {
  const [term, setTerm] = useState('')
  const history = useHistory()
  const { mode } = useTheme()
  const { user } = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?q=${term}`)
  }
  
  return (
    <>
      {user && (
        <div className={`searchbar ${mode}`}>
          <form onSubmit={handleSubmit}>
              <label htmlFor="search">Search</label>
              <input type="text" id="search" onChange={(e) => setTerm(e.target.value)} maxLength="20" autoComplete="off" />
          </form>
        </div>
      )}
    </>

  )
}

export default Searchbar
