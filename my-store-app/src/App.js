import "./App.css"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Products from "./components/Products"
import About from "./components/About"

import {Route, Routes} from "react-router-dom"
import {useState} from "react"

function App() {
  const [bought, setBought] = useState([])
  const [isLogin, setIsLogin] = useState({
    login: "",
    password: "",
    online: false
  })

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={<Home setIsLogin={setIsLogin} isLogin={isLogin} />}
        />
        <Route
          path="/products"
          element={
            <Products
              setBought={setBought}
              bought={bought}
              online={isLogin.online}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
