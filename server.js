import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


//get user input
app.post("/calculate", (req, res) => {
  const data = req.body;

  console.log(data);
  res.json({message:"received"});
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
