const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

module.exports = async function connection(uri) {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to db..."))
    .catch((err) => console.log(err));
  mongoose.connection.on("error", (err) =>
    console.log(`connection failed ${err.message}`)
  );
};
