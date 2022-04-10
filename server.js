const express = require("express");
const { engine } = require("express-handlebars");
const front = require("./routes/front");

const port = 3000;
const app = express();

app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/components",
  })
);

app.use(express.static("public"));

app.use(front);

app.listen(port, () => console.log(`Listening to port ${port}`));
