import { Link } from 'react-router-dom'
import storeLogo from '../../assets/logo.svg'
import Searchbar from '../searchbar/Searchbar'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Navbar.css'

const Navbar = () => {
// destructure our custom changeColor function from the hook
const { color, changeColor } = useTheme()

  return (
    <div className="navbar" style={{ background: color }} >
        <nav>
          <Link to="/" className="storename">
            <h1>MediStore</h1>
            {/* Add a click event handler to logo which when clicked invokes the changeColor function - we pass in a color of red which in turn gets passed into the dispatch function (ThemeContexxt.js) which then gets passed to the reducer function which returns an updated state object which gets passed to the Provider compoent */}
            <img src={storeLogo} alt="medication" onClick={() => changeColor('red')} />
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
