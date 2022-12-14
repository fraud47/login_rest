const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
let app = require("express")();
let port = process.env.PORT || 8090;
let http = require("http").Server(app);
let io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the api." });
});

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);



http.listen(port, () => {
  console.log(`Server is  running on port ${port}`);
});



