const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

process.on("uncaughtException", (error) => {
  console.log(`SYNTAX ERROR`);
  console.log(`${error.name} => ${error.message}`);
  console.log(`${error.stack}`);
  process.exit(1);
});

const app = require("./app");

const port = process.env.PORT || 8005;
const server = app.listen(port, () => {
  console.log(`Server is started http://127.0.0.1:${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log("UNHANDLED REJECTION (RUNTIME ERROR) 💥");
  console.log(`${error.name} => ${error.message}`);
});
