const express = require("express")
// Use built-in Express router
const router = express.Router()
const carsController = require("../controllers/cars_controller")

// Create
router.post("/add", carsController.create)

// Get
router.get("/selectAll", carsController.findAll)
router.get("/select5YO", carsController.findFiveYearOld)
router.get("/", (req, res) => {
  res.send("Hello World")
})

// Update 
router.put("/updateOne", carsController.updateOneCar)

// Delete
router.delete("/deleteOne/:id", carsController.deleteOneCar)

module.exports = router
