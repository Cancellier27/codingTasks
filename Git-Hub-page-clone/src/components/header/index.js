import "./header.css"

import Icon from "../icon"
import ProductDD from "./DropDowns/productDD"
import SolutionsDD from "./DropDowns/solutionsDD"
import OpenSourceDD from "./DropDowns/openSourceDD"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

import gitIcon from "../../icons/github.svg"

function Header() {
  return (
    <nav className="headerContainer">
      <div className="headerFirst mx-3">
        <a href="#">
          <Icon iconSrc={gitIcon} size="big" style="px-2"></Icon>
        </a>
        {/* Dropdown components */}
        <ProductDD />
        <SolutionsDD />
        <OpenSourceDD />
        <a
          href="./pricing"
          className="link-light link-underline link-underline-opacity-0"
        >
          Pricing
        </a>
      </div>

      <div className="headerEnd mx-3">
        <div className="headerInputContainer">
          {/* bootstrap search bar and button */}
          <InputGroup data-bs-theme="dark">
            <Form.Control
              placeholder="Search or jump to..."
              aria-label="Search or jump to..."
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              /
            </Button>
          </InputGroup>
        </div>

        <Button
          variant="link"
          className="m-1 p-2 link-light link-underline link-underline-opacity-0"
        >
          Sign in
        </Button>

        <Button
          variant="link"
          className="m-1 p-2 link-light link-underline link-underline-opacity-0 border border-1 rounded-3"
        >
          Sign up
        </Button>
      </div>
    </nav>
  )
}

export default Header
