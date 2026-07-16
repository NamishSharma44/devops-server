const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "ci-cd pipeline is working fine for EC2 instace" });
});


app.get("/health", (_req, res) => {
  res.json({ message: "ci-cd pipeline is working fine with health check " });
});

app.get("/status", (_req, res) => {
  res.json({ message: "ci-cd pipeline is working fine with status check " });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
