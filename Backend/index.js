const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const cors = require("cors");
const User = require("./Models/Users");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/users");




app.post ("/login", async (req, res) => {
  const {username, password} = req.body;
  User.findOne({username: username})
  .then(user=>{
    if(user){
      if(user.password === password){
        res.status(200).json("Login successful");
      }
      else{
        res.status(501).json("Invalid Password");
      }
    }
    else{
      res.status(501).json("Invalid credentials")
    }
  })

  
});
app.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error creating user", details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
