const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("DB connected.");
    })
    .catch((erro) => erro);
};
module.exports = connectDB;
