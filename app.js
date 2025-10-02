const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer(); // aucun `.storage()` ici si tu ne gères pas de fichiers
const homeRoutes = require("./routes/home");

/*

// mongo db
const mongoose = require("mongoose");
const dsn = "mongodb+srv://YOURLOGIN:YOURPASSWD@cluster0.s19wa.mongodb.net";
console.log("Are you sure your dsn is " + dsn + "?");
mongoose
  .connect(dsn, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected !"))
  .catch(() => console.log("MongoDB failed !"));
*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/", homeRoutes);

module.exports = app;
