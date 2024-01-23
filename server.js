const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello node app");
});
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
