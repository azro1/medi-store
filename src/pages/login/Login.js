import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { mode } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form className={`login-form ${mode}`} onSubmit={handleSubmit} >
      <h2 className={`page-title ${mode}`}>Login</h2>
      <div className="form-control">
        <label>
            <span>Email:</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            <span>Password:</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="btn">login</button>
      </div>
    </form>
  )
}

export default Login
