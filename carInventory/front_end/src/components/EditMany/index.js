import "./EditMany.css"

import {useState} from "react"
import Axios from "axios"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function EditMany({setIsEditingMany, editManyData}) {
  const [updatedCarData, setUpdatedCarData] = useState({
    model: editManyData.model,
    make: editManyData.make,
    owner: editManyData.owner,
    registration: editManyData.registration,
    address: editManyData.address
  })

  // send the request to the backEnd with the new car information
  async function updateCar() {
    // transform the Set into an Array
    const dataArray = [...editManyData]

    // loops through the IDs array and send a put request to update those items
    for (let i = 0; dataArray.length > i; i++) {
      const request = {
        id: dataArray[i],
        toUpdate: updatedCarData
      }

      await Axios.put("http://localhost:8000/updateOne", request)
        .then(function (response) {
          // car added successfully
          console.log("Car updated!")
        })
        .catch(function (error) {
          // error while adding a new car
          console.error("Error while editing the information:", error)
        })
    }

    // reload page
    window.location.reload(false)
  }

  // button submit
  function onSubmit() {
    // all security check passed, so post the data into the database and set the other variables to previous values
    updateCar()
    setIsEditingMany(false)
  }

  return (
    <div className="create-car-container">
      <div className="title-container">
        <h4>{`Editing:`}</h4>
      </div>
      <Form className="create-form-container">
        <Form.Control
          className="form-input"
          placeholder="Model - year"
          aria-label="Model - year"
          aria-describedby="basic-addon2"
          type="number"
          onChange={(e) =>
            setUpdatedCarData({
              ...updatedCarData,
              model: e.target.value
            })
          }
        />
        <Form.Control
          className="form-input"
          placeholder="Make"
          aria-label="Make"
          aria-describedby="basic-addon2"
          onChange={(e) =>
            setUpdatedCarData({
              ...updatedCarData,
              make: e.target.value
            })
          }
        />
        <Form.Control
          className="form-input"
          placeholder="Owner"
          aria-label="Owner"
          aria-describedby="basic-addon2"
          onChange={(e) =>
            setUpdatedCarData({
              ...updatedCarData,
              owner: e.target.value
            })
          }
        />
        <Form.Control
          className="form-input"
          placeholder="Registration"
          aria-label="Registration"
          aria-describedby="basic-addon2"
          onChange={(e) =>
            setUpdatedCarData({
              ...updatedCarData,
              registration: e.target.value
            })
          }
        />
        <Form.Control
          className="form-input"
          placeholder="Address"
          aria-label="Address"
          aria-describedby="basic-addon2"
          onChange={(e) =>
            setUpdatedCarData({
              ...updatedCarData,
              address: e.target.value
            })
          }
        />
        <Button
          className="form-btn"
          variant="success"
          id="button-addon2"
          onClick={onSubmit}
        >
          Update
        </Button>
        <Button
          className="form-btn mx-3"
          variant="success"
          id="button-addon2"
          // set hook isEditingMany to false to close the conditional rendering
          onClick={() => setIsEditingMany(false)}
        >
          Go Back
        </Button>
      </Form>
    </div>
  )
}
