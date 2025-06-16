const fs = require("fs");

exports.getQuestions = (req, res, next) => {
  const data = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/questions.json`, "utf-8"),
  );

  res.status(201).json({
    status: "Success",
    data,
  });
};
