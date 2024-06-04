import "./CreateCar.css"

import {useState} from "react"
import Axios from "axios"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function CreateCar({setIsCreating}) {
  const [alertMessage, setAlertMessage] = useState("")
  const [newCarData, setNewCarData] = useState({
    model: 0,
    make: "",
    owner: "",
    registration: "",
    address: ""
  })

  // send the request to the backEnd with the new car information
  async function postCar() {
    await Axios.post("http://localhost:8000/add", newCarData)
      .then(function (response) {
        // car added successfully
        console.log(response.data)
      })
      .catch(function (error) {
        // error while adding a new car
        console.error("Error while posting the information:", error)
      })
  }

  // button submit
  function onSubmit() {
    // small safety check on the input fields
    if (
      newCarData.model === 0 ||
      newCarData.make === "" ||
      newCarData.owner === "" ||
      newCarData.registration === "" ||
      newCarData.address === ""
    ) {
      // set an alert message to the user
      setAlertMessage(
        "Error in your submission. Please review the items added and re-submit."
      )
    } else {
      // all security check passed, so post the data into the database and set the other variables to previous values
      postCar()
      setAlertMessage("")
      setIsCreating(false)

      // reload page
      window.location.reload(false)
    }
  }

  return (
    <div className="create-car-container">
      <div className="title-container">
        <h4>Create a new car:</h4>
      </div>
      <Form className="create-form-container">
        <Form.Control
          className="form-input"
          placeholder="Model - year"
          aria-label="Model - year"
          aria-describedby="basic-addon2"
          type="number"
          onChange={(e) =>
            setNewCarData({
              ...newCarData,
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
            setNewCarData({
              ...newCarData,
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
            setNewCarData({
              ...newCarData,
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
            setNewCarData({
              ...newCarData,
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
            setNewCarData({
              ...newCarData,
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
          Submit
        </Button>
        <Button
          className="form-btn mx-3"
          variant="success"
          id="button-addon2"
          // set hook isCreating to false to close the conditional rendering
          onClick={() => setIsCreating(false)}
        >
          Go Back
        </Button>
      </Form>
      <h6 className="text-danger my-2">{alertMessage}</h6>
    </div>
  )
}
