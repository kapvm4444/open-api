const express = require("express");

const quizQuestionRoute = require("./routes/quizQuestionsRoute");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

app.use("/quiz", quizQuestionRoute);

app.use(globalErrorHandler);

module.exports = app;
