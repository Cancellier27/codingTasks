import React, {useState} from "react"

import "./navBar.css"

import Icon from "../icon"

import bookOpenIcon from "../../icons/book-open-solid.svg"
import bookBookmarkIcon from "../../icons/book-bookmark-solid.svg"
import loadBarsIcon from "../../icons/bars-progress-solid.svg"
import cubeIcon from "../../icons/cube-solid-w.svg"
import starIcon from "../../icons/star-regular-w.svg"

function NavBar() {

  // hook to change the tag style
  let [selected, setSelected] = useState(["selected","","","",""])

  function changeStyle(btn) {
// change the tag style accordingly to when the user clicks on the button
    switch (btn) {
      case 0:
        setSelected(["selected","notSe","notSe","notSe","notSe"])
        break;
      case 1:
        setSelected(["notSe","selected","notSe","notSe","notSe"])
        break;
      case 2:
        setSelected(["notSe","notSe","selected","notSe","notSe"])
        break;
      case 3:
        setSelected(["notSe","notSe","notSe","selected","notSe"])
        break;
      case 4:
        setSelected(["notSe","notSe","notSe","notSe","selected"])
        break;
      default:
        break
    }
};


  return (
    <div className="navBarContainer">
      <div className="mx-2">
        {/* button that calls the function changeStyle when clicked, and therefore changes the style of the <div> to "selected"
        Repeats for the other buttons. */}
        <button className="navBarBtn" onClick={() => changeStyle(0)}>
          <Icon iconSrc={bookOpenIcon} size="small"></Icon>
          <p className="text-white">Overview</p>
        </button>
        <div className={selected[0]}></div>
      </div>
      <div className="mx-2">
        <button className="navBarBtn" onClick={() => changeStyle(1)}>
          <Icon iconSrc={bookBookmarkIcon} size="small"></Icon>
          <p className="text-white">Repositories</p>
        </button>
        <div className={selected[1]}></div>
      </div>
      <div className="mx-2">
        <button className="navBarBtn" onClick={() => changeStyle(2)}>
          <Icon iconSrc={loadBarsIcon} size="small"></Icon>
          <p className="text-white">Projects</p>
        </button>
        <div className={selected[2]}></div>
      </div>
      <div className="mx-2">
        <button className="navBarBtn" onClick={() => changeStyle(3)}>
          <Icon iconSrc={cubeIcon} size="small"></Icon>
          <p className="text-white">Packages</p>
        </button>
        <div className={selected[3]}></div>
      </div>
      <div className="mx-2">
        <button className="navBarBtn" onClick={() => changeStyle(4)}>
          <Icon iconSrc={starIcon} size="small"></Icon>
          <p className="text-white">Stars</p>
        </button>
        <div className={selected[4]}></div>
      </div>
    </div>
  )
}

export default NavBar
