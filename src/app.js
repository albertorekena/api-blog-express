const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use((req, res, next) => {
  res.status(404).json({message:"Not found"});
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({message:err.message});
});

module.exports = app;