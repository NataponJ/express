const express = require("express");
const router = express.Router({ mergeParams: true });
const mysqlHelper = require("../helper/mysql.helper");

router.get("/", async (req, res) => {
  const sql = `
  	SELECT * FROM books
  `;
  const result = await mysqlHelper.createConnection(sql, []);
  res.json(result);
});

router.post("/", async (req, res) => {
  const param = req.body;
  const sql = `
  	INSERT INTO books SET name = ?
  `;
  const result = await mysqlHelper.createConnection(sql, [param.name]);
  res.json(result);
});

module.exports = router;
