const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express()

app.use(cors())
app.use(express.json())

mongoose
  .connect("mongodb://localhost:27017/LocalJobFinder", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));