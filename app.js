require("dotenv").config();
const express = require("express");
const app = express();
const database = require("./config");
const tasks = require("./routes/tasks");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT;
try {
  (async function db() {
    await database(process.env.MONGO_URI);
  })();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
