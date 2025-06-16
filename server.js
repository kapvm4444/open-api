process.on("uncaughtException", (error) => {
  console.log(`SYNTAX ERROR`);
  console.log(`${error.name} => ${error.message}`);
  console.log(`${error.stack}`);
  process.exit(1);
});

const app = require("./app");

const server = app.listen(443, () => {
  console.log("Server is started on port 4000....");
});

process.on("unhandledRejection", (error) => {
  console.log("UNHANDLED REJECTION (RUNTIME ERROR) 💥");
  console.log(`${error.name} => ${error.message}`);
});
