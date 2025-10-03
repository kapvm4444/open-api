const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const quizQuestionRouter = require("./routes/quizQuestionsRouter");
const worldWiseRouter = require("./routes/worldWiseRouter");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use("/quiz", quizQuestionRouter);
app.use("/ww", worldWiseRouter);

app.all("/{*splat}", (req, res, next) => {
  res.end(
    "This is Open API for the general projects of Khush Vachani (www.khush.pro)",
  );
});

app.use(globalErrorHandler);

module.exports = app;
