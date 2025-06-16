const express = require("express");

const quizQuestionRoute = require("./routes/quizQuestionsRoute");
const AppError = require("./util/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

app.use("/quiz", quizQuestionRoute);

app.all("/{*splat}", (req, res, next) => {
  res.end(
    "This is Open API for the general projects of Khush Vachani (www.khush.pro)",
  );
});

app.use(globalErrorHandler);

module.exports = app;
