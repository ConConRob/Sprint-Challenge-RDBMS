const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.post("/api/projects", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: "A name is required" });
  } else {
    db("projects")
      .insert(req.body)
      .then(idArray => {
        res.status(201).json({ id: idArray[0] });
      })
      .catch(error => {
        res.status(400).json({ message: "must be unique name", error });
      });
  }
});

server.post("/api/actions", (req, res) => {
  const { description, project_id } = req.body;
  if (!description || !project_id) {
    res
      .status(400)
      .json({ message: "A description and project_id is required" });
  } else {
    db("actions")
      .insert(req.body)
      .then(idArray => {
        res.status(201).json({ id: idArray[0] });
      })
      .catch(error => {
        res.status(400).json({ message: "must be unique description", error });
      });
  }
});

server.get("/api/projects/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const projectArray = await db("projects").where({ id });
    const actions = await db
      .select(
        "actions.id",
        "actions.description",
        "actions.note",
        "actions.completed"
      )
      .from("projects")
      .innerJoin("actions", "projects.id", "=", "actions.project_id")
      .where("projects.id", "=", id);

    res.status(200).json({ ...projectArray[0], actions: actions });
  } catch (error) {
    res.status(400).json({ message: "Id not found", error });
  }
});

module.exports = server;
