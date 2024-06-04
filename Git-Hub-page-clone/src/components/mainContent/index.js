import "./mainContent.css"
import About from "./about"
import PopularRepositories from "./popularRepositories"
import Contributions from "./contributions"
import ContributionActivity from "./contributionActivity"

// return the above imported components into the mainContentContainer, for presentation purposes.
function MainContent() {
  return (
    <div className="mainContentContainer">
      <About />
      <PopularRepositories />
      <Contributions />
      <ContributionActivity />
    </div>
  )
}

export default MainContent
