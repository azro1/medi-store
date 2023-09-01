import { Link } from 'react-router-dom'
import storeLogo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
          <Link to="/" className="storename">
            <h1>MediStore</h1>
            <img src={storeLogo} alt="medication" />
            </Link>
          <Link to="/create">Add Medication</Link>
        </nav>
    </div>
  )
}

export default Navbar
