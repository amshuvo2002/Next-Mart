const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const itemsPath = path.join(__dirname, "items.json");

// Helper: read items
const readItems = () => {
  try {
    const data = fs.readFileSync(itemsPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Helper: write items
const writeItems = (items) => {
  fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));
};

// GET all items
app.get("/api/items", (req, res) => {
  const items = readItems();
  res.json(items);
});

// GET single item by id
app.get("/api/items/:id", (req, res) => {
  const items = readItems();
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) res.json(item);
  else res.status(404).json({ error: "Item not found" });
});

// ✅ POST new item
app.post("/api/items", (req, res) => {
  const items = readItems();
  const newItem = {
    id: Date.now(), // unique id
    ...req.body,
  };
  items.push(newItem);
  writeItems(items);
  res.status(201).json(newItem);
});

// DELETE item (optional)
app.delete("/api/items/:id", (req, res) => {
  let items = readItems();
  const id = parseInt(req.params.id);
  const exists = items.find((i) => i.id === id);
  if (!exists) return res.status(404).json({ error: "Item not found" });

  items = items.filter((i) => i.id !== id);
  writeItems(items);
  res.json({ message: "Item deleted" });
});

// UPDATE item (optional)
app.put("/api/items/:id", (req, res) => {
  let items = readItems();
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) return res.status(404).json({ error: "Item not found" });

  items[index] = { ...items[index], ...req.body };
  writeItems(items);
  res.json(items[index]);
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);