require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var connectDB = require("./config");
var usersRouter = require("./routes/users");
var blRouter = require("./routes/blRoutes");
const reclamationRoutes = require("./routes/reclamationRoutes");
const livraisonRoutes = require("./routes/livraisonRoutes");
const cors = require("cors");
var app = express();
const allowedOrigins = [process.env.DNS];
app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
connectDB();

app.use(logger("dev"));
app.use(express.json({ limit: "2gb" }));
app.use(express.urlencoded({ limit: "2gb", extended: true }));
app.use(cookieParser());
app.use("/bl", blRouter);
app.use("/users", usersRouter);
app.use("/reclamation", reclamationRoutes);
app.use("/livraison", livraisonRoutes);
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
