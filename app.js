const express = require("express");

const quizQuestionRoute = require("./routes/quizQuestionsRoute");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

app.use("/quiz", quizQuestionRoute);
app.get("*", (req, res, next) => {
  res.end("OPEN API Platform by Khush Vachhani");
});

app.use(globalErrorHandler);

module.exports = app;
