const express = require("express");
const quizController = require("./../controllers/quizController");

const Router = express.Router();

Router.get("/", quizController.getQuestions);

module.exports = Router;
