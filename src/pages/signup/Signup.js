import { useState } from 'react'

// styles
import './Signup.css'

const Signup = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(displayName, email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit} >
      <h2 className="page-title">Sign Up</h2>
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
        <input style={{width: "6rem"}} type="submit" value="sign up" className="btn" />
      </div>
    </form>
  )
}

export default Signup
