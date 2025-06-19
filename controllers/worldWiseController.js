const fs = require("fs");

exports.getCities = (req, res, next) => {
  const data = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/ww/cities.json`, "utf-8"),
  );

  res.status(200).json({
    status: "success",
    data,
  });
};
