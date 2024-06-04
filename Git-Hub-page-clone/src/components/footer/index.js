import "./footer.css"
import Icon from "../icon"

import gitIcon from "../../icons/github.svg"

function Footer() {
  // array to be iterate and display its items, instead of creating individual items
  let links = [
    "Terms",
    "Privacy",
    "Security",
    "Status",
    "Docs",
    "Contact",
    "Manage cookies",
    "Do not share my personal information"
  ]

  return (
    <div className="footerMainContainer">
      <Icon iconSrc={gitIcon}></Icon>
      <p className="m-0 mx-2 text-secondary">© 2024 GitHub, Inc.</p>
      {/* array to be iterate to display the links*/}
      {links.map(link => {
        return <a href="#" className="mx-2 footerLinks">{link}</a>
      })}
    </div>
  )
}

export default Footer
