const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("port", 8000);
const server = app.listen(app.get("port"), () => {
  console.log(`🖥️  Express running on PORT ${server.address().port}`);
});
