/* A simple crud API to manage an inventory*/

const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
// import custom modules
const service = require("./src/config/firebase");
const read = require("./src/getAll");
const readId = require("./src/getById");
const create = require("./src/post");
const update = require("./src/put");
const remove = require("./src/delete");

// set up authentication
const app = express();
const cors = require("cors");
app.use(cors({ origin: true }));

app.get("/api/", (request, response) => {
  response.send("Hello World!! The API works");
});

// POST (Creates a new item)
app.post("/api/create", create.createItem);

// GET - Reads an item based on id
app.get("/api/read/:id", readId.readById);

// GET - fetches everything from the database
app.get("/api/read", read.readAll);

// PUT (Updates a record given the id)
app.put("/api/update/:id", update.updateItem);

// DELETE (Deletes a record given the id)
app.delete("/api/delete/:id", remove.deleteItem);

exports.app = onRequest(app);
