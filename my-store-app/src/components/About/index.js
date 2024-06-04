import "./About.css"

import Figure from "react-bootstrap/Figure"

import fLogo from "./images/logo.PNG"
import store1 from "./images/loja1.jpg"
import store2 from "./images/loja2.jpg"

export default function About() {
  return (
    <div className="about-container">
      <div className="store-logo-container">
        <Figure>
          <Figure.Image width={171} height={180} alt="171x180" src={fLogo} />
          <Figure.Caption>Filipe's store logo</Figure.Caption>
        </Figure>
      </div>
      <div className="store-description-container">
        <p className="m-0">
          A small web store, to test my abilities with React router.
        </p>
        <p className="m-0">Made with ReactJs, Bootstrap and with love S2</p>
      </div>
      <div className="store-images-container">
        <Figure className="mx-2">
          <Figure.Image width={471} height={480} alt="471x480" src={store1} />
          <Figure.Caption>Store main building</Figure.Caption>
        </Figure>
        <Figure className="mx-2">
          <Figure.Image width={471} height={480} alt="471x480" src={store2} />
          <Figure.Caption>Inside store</Figure.Caption>
        </Figure>
      </div>
      <div className="store-contact-container">
        <p className="m-0">Contact:</p>
        <a className="mx-2" href="https://www.linkedin.com/in/filipe-cancellier-da-costa-8459ab160/">
          LinkedIn
        </a>
        <a className="mx-2" href="https://github.com/Cancellier27">GitHub</a>
        <a className="mx-2" href="mailto:fiipecancelliercosta@gmail.com">Email</a>
      </div>
    </div>
  )
}
