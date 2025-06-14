const showErr = (err, req, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.log("---💥 ERROR---", err);
    res.status(err.statusCode).json({
      status: "fail",
      message: "Something went wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = {
    ...err,
    name: err.name,
    errmsg: err.errmsg,
    message: err.message,
  };

  showErr(error, req, res);

  next();
};
