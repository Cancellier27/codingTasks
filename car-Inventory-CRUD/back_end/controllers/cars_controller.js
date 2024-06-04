const Car = require("../models/cars_model")

exports.create = async (req, res) => {
  const {model, make, owner, registration, address} = req.body

  try {
    // create a new car
    const carModel = new Car({
      model: model,
      make: make,
      owner: owner,
      registration: registration,
      address: address
    })

    // save the car
    const saveCar = await carModel.save()

    res.json({
      message: "The car has been added",
      saveCar
    })
  } catch (error) {
    // error response
    console.error(error)
    res.status(500).send({
      message: "Some error ocurred while creating the car"
    })
  }
}

exports.findAll = async (req, res) => {
  // use the find method to return all cars
  Car.find()
    .then((cars) => {
      // sed the retrieved cars as a success response
      res.send(cars)
    })
    .catch((err) => {
      // error response
      console.log(err)
      res.status(500).send({
        message: "An error occurred while retrieving cars"
      })
    })
}

exports.findFiveYearOld = async (req, res) => {
  // use the find method to return all 5 year old cars
  Car.find({model: {$lt: 2018}})
    .then((cars) => {
      // sed the retrieved cars as a success response
      res.send(cars)
    })
    .catch((err) => {
      // error response
      console.log(err)
      res.status(500).send({
        message: "An error occurred while retrieving cars"
      })
    })
}

exports.updateOneCar = async (req, res) => {
  try {
    const {id, toUpdate} = req.body

    const query = {id: id}

    const updateCar = await Car.findOneAndUpdate(query, toUpdate, {new: true})

    if (updateCar) {
      res.send("Car updated")
    } else {
      res.status(404).send("Car not found")
    }
  } catch (error) {
    console.error("Something went wrong when updating data", error)
    res.status(500).send("An error ocurred while updating")
  }
}

exports.deleteOneCar = async (req, res) => {
  try {
    const {id} = req.params

    const deleteResult = await Car.deleteOne({id: id})

    if (deleteResult.deletedCount > 0) {
      res.send("Successfully delete!")
    } else {
      res.status(404).send("Id not found")
    }
  } catch (error) {
    console.error("Something went wrong when removing data", error)
    res.status(500).send("An error ocurred while removing")
  }
}
