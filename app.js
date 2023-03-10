const express = require("express");

const cors = require('cors');

const FarmRoutes = require("./routes/farm.routes");
const {handleOtherErrors, handle500Error, handleCustomErrors} = require("./error-handling");
const app = express();


app.use(cors());
/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});


/* Telling the server to use the routes in the ProductRoutes file. */

app.use("/api", FarmRoutes);

app.use(handleCustomErrors)
app.use(handleOtherErrors)
app.use(handle500Error)

app.all('*', (req, res) => {
  res.status(404).json({msg: "Path not found"});
});

module.exports = app