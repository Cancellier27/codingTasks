import "./contributionActivity.css"

function ContributionActivity() {
  return (
    <div className="contributionActivityMainContainer">
      <p className="contActTitle">Contribution Activity</p>
      <div className="contActLeftContainer">
        <div>
          <p>May 2024</p>
          <div className="divider"></div>
        </div>
        <p className="text-secondary">Cancellier27 has no activity yet for this period.</p>
        <button className="contActBtn">Show more activity</button>
        <p className="text-secondary contActFooter">Seeing something unexpected? Take a look at the <a href="#">GitHub profile guide.</a></p>

      </div>
      <div className="contActRightContainer">
        <button className="contActBtnBlue">2024</button>
        <button className="contActBtnOnHover">2023</button>
        <button className="contActBtnOnHover">2022</button>
        <button className="contActBtnOnHover">2021</button>
        <button className="contActBtnOnHover">2020</button>
      </div>
    </div>
  )
}

export default ContributionActivity
