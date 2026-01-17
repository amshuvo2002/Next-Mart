const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const itemsPath = path.join(__dirname, "items.json");


const readItems = () => {
  try {
    const data = fs.readFileSync(itemsPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};


const writeItems = (items) => {
  fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));
};


app.get("/api/items", (req, res) => {
  const items = readItems();
  res.json(items);
});


app.get("/api/items/:id", (req, res) => {
  const items = readItems();
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) res.json(item);
  else res.status(404).json({ error: "Item not found" });
});


app.post("/api/items", (req, res) => {
  const items = readItems();
  const newItem = {
    id: Date.now(), 
    ...req.body,
  };
  items.push(newItem);
  writeItems(items);
  res.status(201).json(newItem);
});


app.delete("/api/items/:id", (req, res) => {
  let items = readItems();
  const id = parseInt(req.params.id);
  const exists = items.find((i) => i.id === id);
  if (!exists) return res.status(404).json({ error: "Item not found" });

  items = items.filter((i) => i.id !== id);
  writeItems(items);
  res.json({ message: "Item deleted" });
});


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
