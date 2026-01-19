const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors({ origin: "*"}));
app.use(express.json());

// 🔴 In-memory data (fs নাই)
let items = [];

// sanity check route (examiner friendly)
app.get("/", (req, res) => {
  res.send("Next Mart Backend is running 🚀");
});

// GET all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// GET single item
app.get("/api/items/:id", (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

// POST new item
app.post("/api/items", (req, res) => {
  const newItem = {
    id: Date.now(),
    ...req.body,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// UPDATE item
app.put("/api/items/:id", (req, res) => {
  const index = items.findIndex(i => i.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
});

// DELETE item
app.delete("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = items.find(i => i.id === id);
  if (!exists) {
    return res.status(404).json({ error: "Item not found" });
  }

  items = items.filter(i => i.id !== id);
  res.json({ message: "Item deleted" });
});

// ❌ app.listen নাই
module.exports = app;
