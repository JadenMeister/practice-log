const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  engine({
    defaultLayout: "main.hbs",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials")
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { title: "타이틀입니다." });
});
app.listen(3004, () => {
  console.log("Server is running on port http://localhost:3004");
});
