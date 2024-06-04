import "./Home.css"

import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {useState} from "react"

export default function Home({setIsLogin, isLogin}) {
  const [loginInput, setLoginInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [loginMessage, setLoginMessage] = useState("")
  const [passwordMessage, setPasswordMessage] = useState("")

  function handleLogin() {
    if (loginInput.length !== 0 && passwordInput.length !== 0) {
      setLoginMessage("")
      setPasswordMessage("")
      setIsLogin({login: loginInput, password: passwordInput, online: true})
    } else {
      if (loginInput.length === 0) {
        setLoginMessage("Please, insert a login name")
      } else {
        setLoginMessage("")
      }
      if (passwordInput.length === 0) {
        setPasswordMessage("Please, enter your password")
      } else {
        setPasswordMessage("")
      }
    }
  }

  function handleLogout() {
    setIsLogin({login: "", password: "", online: false})
    setLoginInput("")
    setPasswordInput("")
    setLoginMessage("")
    setPasswordMessage("")
  }

  return (
    <div className="home-container">
      {!isLogin.online && (
        <div className="login-input-container">
          <FloatingLabel
            controlId="floatingInput"
            label="Login Name"
            className="w-100"
            value={loginInput}
            onChange={(e) => {
              setLoginInput(e.target.value)
            }}
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <p className="text-danger">{loginMessage}</p>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="w-100"
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value)
            }}
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <p className="text-danger">{passwordMessage}</p>
          <Button variant="outline-info" type="submit" onClick={handleLogin}>
            Login
          </Button>
        </div>
      )}

      {isLogin.online && (
        <div className="logout-input-container">
          <h1>Welcome {isLogin.login}!</h1>
          <Button variant="outline-dark" type="submit" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
    </div>
  )
}
