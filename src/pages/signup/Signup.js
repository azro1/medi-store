import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useSignup } from '../../hooks/useSignup'

// styles
import './Signup.css'

const Signup = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { mode } = useTheme()
  const { signup, error, isPending } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <form className={`signup-form ${mode}`} onSubmit={handleSubmit} >
      <h2 className={`page-title ${mode}`}>Sign Up</h2>
      {error && <p className={`error ${mode}`}>{error}</p>}
      <div className="form-control">
        <label>
            <span>Username:</span>
            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} maxLength="8" required />
        </label>
        <label>
            <span>Email:</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            <span>Password:</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {!isPending && <button className="signup-btn btn">Sign up</button>}
        {isPending && <button className="signup-btn btn" disabled>processing...</button>}
        
      </div>
    </form>
  )
}

export default Signup
