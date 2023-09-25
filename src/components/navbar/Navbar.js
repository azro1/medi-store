import { Link } from 'react-router-dom'
import storeLogo from '../../assets/logo.svg'
import { useTheme } from '../../hooks/useTheme'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Navbar.css'

const Navbar = () => {
const { color } = useTheme()
const { logout } = useLogout()
const { user } = useAuthContext()

  return (
    <div className="navbar" style={{ background: color }} >
        <nav>
          
          <Link to="/" className="storename">
            <h1>MediStore</h1>
            <img src={storeLogo} alt="medication" />
            </Link>

            {user && (
              <div className="logout">
                <p>hi, {user.displayName}</p>
                <button onClick={() =>logout()}>Logout</button>
              </div>
            )}

           {user && (
             <div className="search-add">
               <Link to="/create">Add Medication</Link>
             </div>
           )}
            
           {!user && (
             <div className="signup">
               <Link to="/login">Login</Link>
               <Link to="/signup">Signup</Link>       
             </div>
           )}

        </nav>
    </div>
  )
}

export default Navbar
