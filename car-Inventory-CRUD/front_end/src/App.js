import "./App.css"

import {useEffect, useState} from "react"
import Button from "react-bootstrap/Button"
import Axios from "axios"

import CreateCar from "./components/CreateCar"
import EditOne from "./components/EditOne"
import EditMany from "./components/EditMany"

function App() {
  const [title, setTitle] = useState("Showing All cars")
  const [carsData, setCarsData] = useState([])
  const [editManyData, setEditManyData] = useState(null)
  const [editOneData, setEditOneData] = useState(null)

  // booleans values for conditional rendering
  const [isCreating, setIsCreating] = useState(false)
  const [isEditingOne, setIsEditingOne] = useState(false)
  const [isEditingMany, setIsEditingMany] = useState(false)

  // get - fetch cars data from requested URL
  async function fetchData(URL) {
    await Axios.get(URL)
      .then((res) => {
        // store the data received into the carsData hook
        setCarsData([...res.data])
      })
      .catch((error) => {
        // error handling
        console.error("An error ocurred when fetching the data.", error)
      })
  }

  // runs when the page loads once
  useEffect(() => {
    // fetch data when the page loads first time
    fetchData("http://localhost:8000/selectAll")

    // set the editManyData to a empty Set() when the page loads
    let emptySet = new Set()
    setEditManyData(emptySet)
  }, [])

  // gets data from all cars and set the title to all cars
  function showAllCars() {
    fetchData("http://localhost:8000/selectAll")
    setTitle("Showing All cars")
  }

  // gets data from 5 year old cars and set the title accordingly
  function show5YOCars() {
    fetchData("http://localhost:8000/select5YO")
    setTitle("Showing cars that are at least 5 years old")
  }

  // updated the editManyData hook with the ids of the items that are checked
  function handleCheck(event, id) {
    if (event.target.checked) {
      let updatedSet = editManyData
      updatedSet.add(id)
      setEditManyData(updatedSet)
    } else {
      let newSet = editManyData
      newSet.delete(id)
      setEditManyData(newSet)
    }
  }

  // Delete one element handler
  async function handleDeleteOne(id) {
    await Axios.delete(`http://localhost:8000/deleteOne/${id}`)
    // refresh the page
    window.location.reload(false)
  }

  // edit one element handler
  async function handleEditOne(car) {
    setIsEditingOne(true)
    setEditOneData(car)
  }

  return (
    <div className="App">
      {/* conditional rendering for the create car component */}
      {isCreating && <CreateCar setIsCreating={setIsCreating} />}

      {/* conditional rendering for the edit one car component */}
      {isEditingOne && (
        <EditOne setIsEditingOne={setIsEditingOne} editOneData={editOneData} />
      )}

      {/* conditional rendering for the edit many cars component */}
      {isEditingMany && (
        <EditMany
          setIsEditingMany={setIsEditingMany}
          editManyData={editManyData}
        />
      )}

      {/* make title dynamic  to show different filters*/}
      <h4 className="my-4">{title}</h4>

      <div className="menu-btn-container">
        <Button className="menu-btn" onClick={() => setIsCreating(true)}>
          Add new car
        </Button>
        <Button className="menu-btn" onClick={show5YOCars}>
          List 5 years old
        </Button>
        <Button className="menu-btn" onClick={showAllCars}>
          List All
        </Button>
      </div>
      <div className="app-container">
        <ul className="cars-list-outer-container">
          {carsData.map((car) => {
            return (
              <li className="car-list-inner-container" key={car.id}>
                <div className="car-list-info">
                  <div className="car-info">
                    <p className="car-make">{car.make}</p>
                    <p className="car-model">{`Year: ${car.model}`}</p>
                    <p className="car-registration">{`Reg: ${car.registration}`}</p>
                  </div>
                  <div className="owner-info">
                    <p className="car-owner">{car.owner}</p>
                    <p className="car-address">{`Address: ${car.address}`}</p>
                  </div>
                </div>
                <div className="car-list-buttons">
                  <Button
                    variant="danger"
                    className="delete-btn"
                    onClick={() => handleDeleteOne(car.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="warning"
                    className="edit-btn"
                    onClick={() => handleEditOne(car)}
                  >
                    Edit
                  </Button>
                  <input
                    type="checkbox"
                    className="checkbox-btn"
                    onChange={(event) => {
                      handleCheck(event, car.id)
                    }}
                  ></input>
                </div>
              </li>
            )
          })}
          <div>
            <Button
              variant="warning"
              className="update-selected-btn"
              onClick={() => setIsEditingMany(true)}
            >
              {" "}
              Edit selected items
            </Button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default App
