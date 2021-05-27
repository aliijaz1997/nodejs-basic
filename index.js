const express = require("express");
const app = express();
const data = require("./data");
console.log(data);
// All
app.get("/api/todos", function (req, res) {
  res.status(200).json(data);
});
// Single todo
app.get("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const todo = data.find((todo) => todo.id === id);
  if (!todo) return res.status(404).send();
  res.status(200).json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deletedTodoIndex = data.findIndex((item) => item.id === id);
  if (deletedTodoIndex === -1) return res.status(404).send();
  data.splice(deletedTodoIndex, 1);
  res.status(200).send();
});

app.listen(5000, () => {
  console.log("Started listening on port 5000");
});
