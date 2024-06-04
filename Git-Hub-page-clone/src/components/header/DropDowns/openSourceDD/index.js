import Dropdown from "react-bootstrap/Dropdown"
import DDItems from "../DDItems"

// Dropdown for the openSource data, pass the props to the DDitems to be shown
function OpenSourceDD() {
  return (
    // dropdown bootstrap toggle button
    <Dropdown data-bs-theme="light">
      <Dropdown.Toggle
        variant="link"
        id="dropdown-basic"
        className="link-light link-underline link-underline-opacity-0"
      >
        Open Source
      </Dropdown.Toggle>

      {/* Dropdown items to be shown */}
      <Dropdown.Menu>
        <DDItems
          itemType={"title"}
          href={"#/openSource-1"}
          title={"GitHub Sponsors"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/openSource-2"}
          desc={"Fund open source developers"}
        ></DDItems>

        <Dropdown.Divider />

        <DDItems
          itemType={"title"}
          href={"#/openSource-3"}
          title={"The ReadME Project"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/openSource-4"}
          desc={"GitHub community articles"}
        ></DDItems>

        <Dropdown.Divider />

        <DDItems
          itemType={"title"}
          href={"#/openSource-5"}
          title={"Repositories"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/openSource-6"}
          desc={"Topics"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/openSource-7"}
          desc={"Trending"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/openSource-8"}
          desc={"Collections"}
        ></DDItems>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default OpenSourceDD
