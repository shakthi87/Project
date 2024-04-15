const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const app = express();
const user = require("./controller/userController");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/users", user.create);

app.get("/users", user.readall);

app.get("/users/:id", user.readByID);

app.put("/users/:id", user.updateByID);

app.delete("/users/:id", user.deleteByID);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port'${process.env.PORT}'`);
});
