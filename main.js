const express = require("express");
const bodyParser = require("body-parser");
const book = require("./server/book");
const bookRest = require("./server/book/book.rest");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/book", book);
app.use("/book/rest", bookRest);

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}/`);
});
