import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
          <Link to="/" className="storename"><h1>Medi Store</h1></Link>
          <Link to="/create">Add Medication</Link>
        </nav>
    </div>
  )
}

export default Navbar
