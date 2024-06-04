import "./App.css"
import Header from "./components/header"
import NavBar from "./components/navBar"
import MainContent from "./components/mainContent"
import Footer from "./components/footer"
import Original from "./components/original"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainContent />
      <Footer />
      <Original />
    </div>
  )
}

export default App
