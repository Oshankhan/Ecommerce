const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
// Use process.env.PORT

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

const connectDATABASE = require("./config/database");
//unhandled promise exception
process.on("uncaughtException", (err) => {
  console.log(`Error ${err.message}`);
  console.log("Shutting down the server");
  process.exit(1);
});

connectDATABASE();

//unhandle prommise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log("Shutting down the server");
  server.close(() => {
    process.exit(1);
  });
});
