import { Link } from 'react-router-dom'
import storeLogo from '../../assets/logo.svg'
import Searchbar from '../searchbar/Searchbar'

// styles
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
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
