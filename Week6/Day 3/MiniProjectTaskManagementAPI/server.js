const express = require("express");
const app = express();
const taskRoutes = require("./Routes/tasksRoute");
app.use(express.json());

app.use("/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
