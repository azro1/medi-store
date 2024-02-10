import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useLogin } from '../../hooks/useLogin'

// styles
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { mode } = useTheme()
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form className={`login-form ${mode}`} onSubmit={handleSubmit} >
      <h2 className={`page-title ${mode}`}>Login</h2>
      {error && <p className={`error ${mode}`}>{error}</p>}
      <div className="form-control">
        <label>
            <span>Email:</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            <span>Password:</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {!isPending && <button className="login-btn btn" >Login</button>}
        {isPending && <button className="login-btn btn" disabled>loading...</button>}
      </div>
    </form>
  )
}

export default Login

