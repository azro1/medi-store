import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Signup.css'

const Signup = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { mode } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
  }

  return (
    <form className={`signup-form ${mode}`} onSubmit={handleSubmit} >
      <h2 className={`page-title ${mode}`}>Sign Up</h2>
      <div className="form-control">
        <label>
            <span>Username:</span>
            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </label>
        <label>
            <span>Email:</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            <span>Password:</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="btn">sign up</button>
      </div>
    </form>
  )
}

export default Signup
