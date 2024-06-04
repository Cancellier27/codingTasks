import "./popularRepositories.css"
import RepoCard from "./reposCard"

function PopularRepositories() {
  return (
    <div className="PopularRepositoriesMainContainer">
      <p className="popRepoTitle">Popular Repositories</p>
      <div className="d-flex justify-content-between align-items-center">
        <RepoCard title={"HashGame"} language={"JavaScript"} id={"l-1"} />
        <RepoCard title={"Jogo-Forca"} language={"HTML"} id={"l-2"} />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <RepoCard title={"Ecoleta-app"} language={"TypeScript"} id={"l-3"} />
        <RepoCard title={"FilipeSite"} language={"JavaScript"} id={"l-4"} />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <RepoCard
          title={"github-search-app"}
          language={"JavaScript"}
          id={"l-5"}
        />
        <RepoCard
          title={"React-immersion"}
          language={"JavaScript"}
          id={"l-6"}
        />
      </div>
    </div>
  )
}

export default PopularRepositories
