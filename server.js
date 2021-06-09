const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workouts",
  { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// app.get("/", (req, res) => {
//     res.json(path.join__dirname, "public/index.html");
// })

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});