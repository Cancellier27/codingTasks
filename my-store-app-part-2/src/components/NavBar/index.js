import "./NavBar.css"
import {useState} from "react"
import {Link} from "react-router-dom"

export default function NavBar() {
  const [navSelected, setNavSelected] = useState([
    "selected",
    "not-selected",
    "not-selected"
  ])

  // changes the class in the component when the button is clicked, changing the selected class
  function handleClick(index) {
    let classArr = ["not-selected", "not-selected", "not-selected"]
    classArr[index] = "selected"
    setNavSelected(classArr)
  }

  return (
    <nav className="nav-bar-container">
      <div className="nav-button-container">
        <Link
          to="/"
          className="nav-home nav-button"
          onClick={() => handleClick("0")}
        >
          Home
        </Link>
        <div className={`${navSelected[0]} under-bar-0`}></div>
      </div>
      <div className="nav-button-container">
        <Link
        to="/products"
          className="nav-products nav-button"
          onClick={() => handleClick("1")}
        >
          Products
        </Link>
        <div className={`${navSelected[1]} under-bar-1`}></div>
      </div>
      <div className="nav-button-container">
        <Link
          to="/about"
          className="nav-about nav-button"
          onClick={() => handleClick("2")}
        >
          About
        </Link>
        <div className={`${navSelected[2]} under-bar-2`}></div>
      </div>
    </nav>
  )
}
