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
          
          <Link to="/dashboard" className="storename">
            <h1>MediStore</h1>
            <img src={storeLogo} alt="medication" />
          </Link>

            {user && (
              <div className="logout">
                <span className="displayName">
                  <p>hi, {user.displayName}</p>
                </span>
                <button onClick={() =>logout()}>Logout</button>
                <Link to="/create">Add Medication</Link>
             </div>
           )}
            
           {!user && (
             <div className="login">
               <Link to="/login">Login</Link>
               <Link to="/signup">Signup</Link>       
             </div>
           )}

        </nav>
    </div>
  )
}

export default Navbar
