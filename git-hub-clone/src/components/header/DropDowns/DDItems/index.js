import Dropdown from "react-bootstrap/Dropdown"
import Icon from "../../../icon"

// created the idividual items on the drop downs
// returns a different jsx based on the itemType prop passed to the component
function DDItems({itemType, href, icon, title, desc}) {
  if (itemType === "title") {
    // dropdown single titles
    return (
      <Dropdown.Item href={href}>
        <h6 className="my-1 mx-0">{title}</h6>
      </Dropdown.Item>
    )
  } else if (itemType === "description") {
    // dropdown single description
    return (
      <Dropdown.Item href={href}>
        <p className="m-0">{desc}</p>
      </Dropdown.Item>
    )
  } else {
    // dropdown big item with icon, title and description
    return (
      <Dropdown.Item href={href} className="my-2">
        <div className="d-flex align-items-center justify-content-start">
          <Icon iconSrc={icon}></Icon>
          <div className="mx-4">
            <h6 className="m-0">{title}</h6>
            <p className="m-0">{desc}</p>
          </div>
        </div>
      </Dropdown.Item>
    )
  }
}

export default DDItems
