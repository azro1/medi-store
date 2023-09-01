import { Link } from 'react-router-dom'
import storeLogo from '../../assets/logo.svg'
import Searchbar from '../searchbar/Searchbar'
// import our custom theme hook
import { useTheme } from '../../hooks/useTheme'


// styles
import './Navbar.css'

const Navbar = () => {
// invoke it and destructure color property from it and eveything works the same only now we're using less code in the component where we use it
const { color } = useTheme()

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
