import Dropdown from "react-bootstrap/Dropdown"
import DDItems from "../DDItems"

// Dropdown for the openSource data, pass the props to the DDitems to be shown
function SolutionsDD() {
  return (
    // dropdown bootstrap toggle button
    <Dropdown data-bs-theme="light">
      <Dropdown.Toggle
        variant="link"
        id="dropdown-basic"
        className="link-light link-underline link-underline-opacity-0"
      >
        Solutions
      </Dropdown.Toggle>

      {/* Dropdown items to be shown */}
      <Dropdown.Menu>
        <DDItems
          itemType={"title"}
          href={"#/solutions-1"}
          title={"For"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-2"}
          desc={"Enterprise"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-3"}
          desc={"Teams"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-4"}
          desc={"Startup"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-5"}
          desc={"Education"}
        ></DDItems>

        <Dropdown.Divider />

        <DDItems
          itemType={"title"}
          href={"#/solutions-6"}
          title={"By Solution"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-7"}
          desc={"CI/CD & Automation"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-8"}
          desc={"DevOps"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-9"}
          desc={"DevSecOps"}
        ></DDItems>

        <Dropdown.Divider />

        <DDItems
          itemType={"title"}
          href={"#/solutions-10"}
          title={"Resources"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-11"}
          desc={"Learning Pathways"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-12"}
          desc={"White papers, Ebooks, Webinars"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-13"}
          desc={"Customer Stories"}
        ></DDItems>
        <DDItems
          itemType={"description"}
          href={"#/solutions-14"}
          desc={"Partners"}
        ></DDItems>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SolutionsDD
