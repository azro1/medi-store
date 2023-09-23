import { useState } from 'react'

// styles
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit} >
      <h2 className="page-title">Login</h2>
      <div className="form-control">
        <label>
            <span>Email:</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            <span>Password:</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input style={{width: "6rem"}} type="submit" value="login" className="btn" />
      </div>
    </form>
  )
}

export default Login
