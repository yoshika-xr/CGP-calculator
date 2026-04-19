import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample API
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express 🚀" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});