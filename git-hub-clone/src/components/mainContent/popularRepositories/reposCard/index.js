import "./reposCard.css"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

function RepoCard({title, language, id}) {
  // creates a card with the props passed to it, and also displays a tooltip information from bootstrap structure
  // bootstrap tooltip component
  const Link = ({linkId, children, linkTitle}) => (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id={linkId}>{linkTitle}</Tooltip>}
    >
      <a href="#" className="link-underline link-underline-opacity-0">{children}</a>
    </OverlayTrigger>
  )

  return (
    <div className="repoCardContainer">
      <div className="h-100 d-flex flex-column justify-content-between align-items-start">
        {/* tooltip */}
        <Link linkTitle={title} linkId={id}>
          {title}
        </Link>{" "}
        <div className="d-flex align-items-center text-secondary repoCardLanguage">
          <p className={`dot ${language}`}></p>
          <p className="mx-2">{language}</p>
        </div>
      </div>
      <div className="h-100 d-flex flex-column justify-content-start align-items-start">
        <p className="repoCardPrivacy text-secondary">Public</p>
      </div>
    </div>
  )
}

export default RepoCard
