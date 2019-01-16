const mongoose = require("mongoose");
const config = require("../config/db/config");

const connect = async () => {
  try {
    const cString = await mongoose.connect(
      config.mongoURI,
      { useNewUrlParser: true }
    );

    console.log("connected !");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;
