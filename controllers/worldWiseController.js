const fs = require("fs");

const AppError = require("./../util/appError");

exports.getCities = (req, res, next) => {
  const data = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/ww/cities.json`, "utf-8"),
  );

  res.status(200).json({
    status: "success",
    data,
  });
};

exports.getCity = (req, res, next) => {
  const cityId = req.params.id * 1;
  const allCities = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/ww/cities.json`, "utf-8"),
  );
  const data = allCities.find(({ id }) => id === cityId);

  if (data === undefined)
    return next(new AppError(404, "No such data regarding that ID"));

  res.status(200).json({
    status: "success",
    data,
  });
};
