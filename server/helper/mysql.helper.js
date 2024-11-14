const mysql = require("mysql2/promise");

exports.createConnection = async (sql, values) => {
  try {
    const conncetion = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "tutorial",
      port: 3306,
    });
    const result = await conncetion.query(sql, ...values);
    if (result) {
      return result[0];
    } else {
      return {
        status: 500,
        message: result[0],
      };
    }
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };
  }
};
