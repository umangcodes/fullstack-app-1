const express = require("express");
const connectDB = require("./config/db");
const books = require("./routes/api/books");
var cors = require("cors");
const app = express();

connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use("/", books);
app.get("/", (req, res) => {
  res.send("setup in progress...");
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
