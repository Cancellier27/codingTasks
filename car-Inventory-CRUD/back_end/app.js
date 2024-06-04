const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/route")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

// MongoDB connection
// Change the uri with your own database and add your password at <password>
const uri =
  "mongodb+srv://filipecancelliercosta:<password>@bootcampfilipecluster.gpizgfk.mongodb.net/?retryWrites=true&w=majority&appName=BootcampFilipeCluster"

const clientOptions = {
  serverApi: {version: "1", strict: true, deprecationErrors: true}
}

mongoose
  .connect(uri, clientOptions)
  .then(() => {
    console.log("Connection to mongoDB done successfully!")
  })
  .catch((err) => {
    console.log("Error connecting to mongoose", err)
  })

// NodeJs and express server
app.use("/", route)
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
