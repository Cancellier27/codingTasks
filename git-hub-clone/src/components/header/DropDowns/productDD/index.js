import Dropdown from "react-bootstrap/Dropdown"
import DDItems from "../DDItems"

import actionIcon from "../../../../icons/check-solid.svg"
import cubeIcon from "../../../../icons/cube-solid.svg"
import shieldIcon from "../../../../icons/shield-halved-solid.svg"
import codespaceIcon from "../../../../icons/desktop-solid.svg"
import copilotIcon from "../../../../icons/robot-solid.svg"
import reviewIcon from "../../../../icons/laptop-code-solid.svg"
import issueIcon from "../../../../icons/circle-dot-regular.svg"
import discussionIcon from "../../../../icons/comments-regular.svg"

// Dropdown for the openSource data, pass the props to the DDitems to be shown
function ProductDD() {
  return (
    // dropdown bootstrap toggle button
    <Dropdown data-bs-theme="light">
      <Dropdown.Toggle
        variant="link"
        id="dropdown-basic"
        className="link-light link-underline link-underline-opacity-0"
      >
        Product
      </Dropdown.Toggle>

      {/* Dropdown items to be shown */}
      <Dropdown.Menu>
        <DDItems
          href={"#/action-1"}
          icon={actionIcon}
          title={"Action"}
          desc={"Automate any workflow"}
        ></DDItems>
        <DDItems
          href={"#/action-2"}
          icon={cubeIcon}
          title={"Packages"}
          desc={"Host and manage packages"}
        ></DDItems>
        <DDItems
          href={"#/action-3"}
          icon={shieldIcon}
          title={"Security"}
          desc={"Find and fix vulnerabilities"}
        ></DDItems>
        <DDItems
          href={"#/action-4"}
          icon={codespaceIcon}
          title={"Codespaces"}
          desc={"Instant dev environments"}
        ></DDItems>
        <DDItems
          href={"#/action-5"}
          icon={copilotIcon}
          title={"Copilot"}
          desc={"Write better code with AI"}
        ></DDItems>
        <DDItems
          href={"#/action-6"}
          icon={reviewIcon}
          title={"Code Review"}
          desc={"Manage code changes"}
        ></DDItems>
        <DDItems
          href={"#/action-6"}
          icon={issueIcon}
          title={"Issues"}
          desc={"Plan and track work"}
        ></DDItems>
        <DDItems
          href={"#/action-7"}
          icon={discussionIcon}
          title={"Discussions"}
          desc={"Collaborate outside of code"}
        ></DDItems>
        <Dropdown.Divider />
        <DDItems
          itemType={"title"}
          href={"#/action-8"}
          title={"Explore"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/action-9"}
          desc={"All features"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/action-10"}
          desc={"Documentation"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/action-11"}
          desc={"GitHub Skills"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/action-12"}
          desc={"Blog"}
        ></DDItems>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ProductDD
