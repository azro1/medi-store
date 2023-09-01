import { Link } from 'react-router-dom'
import storeLogo from '../../assets/logo.svg'

// to use a context inside a component we use the useContext hook and also import our context (in this case it's our ThemeContext) 
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import Searchbar from '../searchbar/Searchbar'

// styles
import './Navbar.css'

const Navbar = () => {
// we use the hook in our component to use a specific context by destructuring the properties from it and inside useContext we pass in whatever context we want to access
const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={{ background: color }} >
        <nav>
          <Link to="/" className="storename">
            <h1>MediStore</h1>
            <img src={storeLogo} alt="medication" />
            </Link>
            <div className="search-add">
              <Searchbar />
              <Link to="/create">Add Medication</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
