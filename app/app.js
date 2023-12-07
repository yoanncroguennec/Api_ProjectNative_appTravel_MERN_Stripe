const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Ceci est une route pour dire boujour
app.get("/", (req, res) => {
  res.json("Bienvenue sur mon serveur");
});
app.use("/api/auth", require("../server/routes/Auth.Routes"));
app.use("/api/attractions", require("../server/routes/Attractions.Routes"));
app.use("/api/countries", require("../server/routes/Countries.Routes"));
app.use("/api/hotels", require("../server/routes/Hotels.Routes"));

app.all("*", (req, res) => {
  res.status(404).json({ message: "This routes doesn't exist" });
});

module.exports = app;
