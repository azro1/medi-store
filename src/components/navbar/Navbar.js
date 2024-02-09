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
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/dashboard' className='storename' replace>
          <h1>MediStore</h1>
          <img src={storeLogo} alt='medication' />
        </Link>

        {user && (
          <div className='logout'>
            <span className='displayname'>
              <p>Hi, {user.displayName}</p>
            </span>
            <Link
              to='/create'
              style={{
                backgroundColor: color === '#232524' ? '#A9938B' : '#232524'
              }}
              replace
            >
              Add Medication
            </Link>
            <button
              style={{
                backgroundColor: color === '#232524' ? '#A9938B' : '#232524',
              }}
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        )}

        {!user && (
          <div className='login'>
            <Link to='/login' replace>
              Login
            </Link>
            <Link to='/signup' replace>
              Signup
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar
