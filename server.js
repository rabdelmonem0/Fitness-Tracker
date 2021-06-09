const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workouts",
  { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.get("/", (req, res) => {
    res.json(path.join__dirname, "public/index.html");
})

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});