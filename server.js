const express = require('express');
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.post("/api/projects", (req, res) => {
  const {name} = req.body
  if(!name){
    res.status(400).json({message: "A name is required"})
  } else {

  }
})

server.post("/api/actions", (req, res) => {
  
})

server.get("/api/projects/:id", (req,res) => {

})