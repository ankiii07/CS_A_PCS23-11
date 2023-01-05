const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(
    `Access-Control-Allow-Headers`,
    `Origin, X-Requested-With, Content-Type, Accept`
  );
  next();
});

app.get("/", (req, res) => res.send(`FitBud Backend`));

const SERVER_PORT = process.env.PORT || 3001;
const server = app.listen(SERVER_PORT, () =>
  console.log(`Server started on port ${SERVER_PORT}.`)
);

require("./util/socket")(server);
