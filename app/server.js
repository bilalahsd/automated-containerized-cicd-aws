const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "API is running"
  });
});

app.get("/api/tasks", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn Docker",
      completed: false
    },
    {
      id: 2,
      title: "Deploy to Kubernetes",
      completed: false
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});