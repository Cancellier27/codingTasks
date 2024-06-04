const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
  model: {
    type: Number,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  registration: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: false,
    default: Date.now
  }
})

module.exports = mongoose.model("Cars", carSchema)
