const express = require("express");
const cors = require("cors");
// get MongoDB driver connection
const dbo = require("./connectToDb");
const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./handleRoutes"));

// Global error handling
app.use(function (err, _req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something is broken");
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
