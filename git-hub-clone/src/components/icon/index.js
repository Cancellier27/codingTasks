import "./icon.css"

function Icon({iconSrc, size, style}) {
  let icon

  // returns a different jsx based on the size prop passed to the component
  if (size === "big") {
    icon = <img src={iconSrc} className={`iconBig ${style}`}></img>
  } else if (size === "bigger"){
    icon = <img src={iconSrc} className={`iconBigger ${style}`}></img>
  } else if (size === "small"){
    icon = <img src={iconSrc} className={`iconSmall ${style}`}></img>
  } else {
    icon = <img src={iconSrc} className={`iconStandard ${style}`}></img>
  }

  return icon
}

export default Icon
