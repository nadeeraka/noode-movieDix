const express = require("express");
const app = express();
//router
const router = require("./routes/router");

// set router
app.use(router);

//set ejs
app.set("view engine", "ejs");
//db
const connect = require("./db/db");
//db connection
connect();
//port
const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
