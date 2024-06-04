import "./about.css"
import AsideBar from "./asideBar"

function About() {
  return (
    <div className="aboutMainContainer">
      <AsideBar />
      <p className="m-0">Cancellier27/README.md</p>
      <br />
      <h5 className="m-0">Hi there, I am Filipe Cancellier da Costa</h5>
      <br />
      <p className="m-0">Web Developer student at CoGrammar</p>
      <br />
      <h4 className="m-0">🔖 About</h4>
      <hr></hr>
      <p className="m-0">
        I am a Civil Engineer and my professional career can be summarized in
        civil engineering related jobs. However, I have decided to challenge
        myself and learn something new, like coding. 💻
      </p>
      <br />
      <p className="m-0">
        I have always enjoyed computers, games and technology, so I thought "Why
        not try coding? ", and so, I did. I have been teaching myself coding for
        web development for a while and now, with CoGrammar bootcamp, I am
        aiming to improve my skills to a competitive level and achieve my first
        job in the tech industry.
      </p>
      <br />
      <p className="m-0">
        I am motivated to learn new technologies, always in constant
        professional development, quickly learning problem-solving, with great
        interest in web-dev.
      </p>
      <br />
      <p className="m-0">
        A bit more about me is that I was born and raised in Brazil and I
        consider myself a good and simple person. In my free time you will
        probably find me watching a good movie, playing a game on my computer or
        studying coding.
      </p>
      <br />
      <h4 className="m-0">🔥 Languages</h4>
      <hr></hr>
      <img src="https://camo.githubusercontent.com/4ff9d9cc09b9e510adddfa99afb0efdea4e91b55c887629a5ab97f2ae89a4038/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d43616e63656c6c696572323726686964653d546558266c61796f75743d636f6d70616374"></img>
      <br />
      <h4 className="mt-3">📬 Get in touch!</h4>
      <hr></hr>
      <button>Email</button>
      <button>LinkedIn</button>
    </div>
  )
}

export default About
