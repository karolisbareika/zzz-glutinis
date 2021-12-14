const express = require("express");
const mongoose = require("mongoose");
const markerRoute = require("./routes/markers");
const userRoute = require("./routes/users");

require("dotenv").config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("mongo db prijungta");
  })
  .catch((err) => console.log("neprijungia db"));

app.use("/api/markers", markerRoute);
app.use("/api/users", userRoute);

app.listen(3000, () => {
  console.log("paleistas portas 3000");
});
