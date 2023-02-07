const dataJSON = require("./data.json");
const express = require("express");
const cors = require("cors");
const app = express();
let users = [];

app.use(express.json());
app.use(cors());

//get, post, delete, put
app
  .get("/", (req, res) => {
    res.send(users);
  })
  .get("/CryptoNews", (req, res) => {
    res.send(dataJSON);
  })
  .post("/", (req, res) => {
    const data = req.body;
    users = [...users, data];
    res.send("user created");
  })
  .delete("/:name?", (req, res) => {
    const params = req.params.name;
    let deleteUser = users.filter((val) => val.name !== params);
    users = deleteUser;
    res.send(users);
  })
  .put("/", (req, res) => {
    const data = req.body;
    users.map((val) => {
      if (val.no === data.no) val.name = data.name;
    });
    res.send(users);
  });

app.listen(4000, () => {
  console.log("Server is running inport 4000");
}); //open protokol http
