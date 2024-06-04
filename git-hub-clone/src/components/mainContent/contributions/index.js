import "./contributions.css"

function Contributions() {
  const months = [
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr"
  ]

  return (
    <div className="contributionsMainContainer">
      <p className="contTitle">16 contributions in the last year</p>
      <div className="months d-flex">
        {/* iterate over the months array to avoid creating many lines of code with same structure. */}
        {months.map((month) => {
          return <p>{month}</p>
        })}
      </div>
      <div className="weekAndGrid">
        <div className="weekDays">
          <p>Mon</p>
          <p>Wed</p>
          <p>Fri</p>
        </div>
        <div className="gridCubes">
          {/* create an array with 371 items and fills it with empty strings, just to iterate through it and display the 
          days in form of squared as gitHub shows code contribution */}
          {Array(371)
            .fill(" ")
            .map((item) => {
              return <div className="cubes">{item}</div>
            })}
        </div>
      </div>
      <div className="contributionFooter">
        <p className="text-secondary">Learn how we count contributions</p>
        <div>
          <p>Less</p>
          <div className="cubes"></div>
          <div className="cubes green1"></div>
          <div className="cubes green2"></div>
          <div className="cubes green3"></div>
          <div className="cubes green4"></div>
          <p>More</p>
        </div>
      </div>
    </div>
  )
}

export default Contributions
