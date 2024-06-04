import "./asideBar.css"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import Icon from "../../../icon"

import followIcon from "../../../../icons/user-group-solid.svg"
import locationIcon from "../../../../icons/location-dot-solid.svg"
import chainIcon from "../../../../icons/link-solid.svg"
import sharkIcon from "../../../../icons/pull-shark.png"

// aside bar that is positioned absolute to its parent component, which is the <About /> component.
// uses elements from bootstrap and also icons from fontAwesome.
function AsideBar() {
  return (
    <div className="asideBarContainer">
      {/* User Image */}
      <Image
        src="https://avatars.githubusercontent.com/u/62081060?v=4"
        roundedCircle
        className="asideUserImage"
      />
      <h3 className="m-0 mt-4">Filipe Costa</h3>
      <h5 className="m-0 mb-4 fw-lighter text-secondary">Cancellier27</h5>
      {/* follow button */}
      <Button
        variant="dark"
        className="asideFollowBtn border border-secondary border-opacity-25"
      >
        Follow
      </Button>

      <div className="asideFollowContainer">
        <Icon iconSrc={followIcon} size="small"></Icon>
        {/* number of followers and following */}
        <p className="m-0 mx-2 p-0 text-secondary">
          <strong className="text-white">1</strong> follower .{" "}
          <strong className="text-white">5</strong> following
        </p>
      </div>

      {/* general info abou the user */}
      <div className="asideLocationContainer">
        <Icon iconSrc={locationIcon} size="small"></Icon>
        <p className="m-0 mx-3 p-0">London</p>
      </div>

      <div className="asideLinkedinContainer">
        <Icon iconSrc={chainIcon} size="small"></Icon>
        <a href="#" className="asideLinkedinLink p-0">
          https://www.linkedin.com/in/filipe-cancellier-da-costa-8459ab160/
        </a>
      </div>

      {/* Achievements made by the user */}
      <h6 className="m-0 mb-2 p-0 fs-5">Achievements</h6>
      <Icon iconSrc={sharkIcon} size="bigger"></Icon>

      <div className="asideFeedbackContainer d-flex my-2">
        <p>Beta</p>
        <a href="#" className="m-0 p-0">
          Send feedback
        </a>
      </div>
      <a href="#" className="m-0 p-0 fw-lighter text-secondary">
        Block or Report
      </a>
    </div>
  )
}

export default AsideBar
