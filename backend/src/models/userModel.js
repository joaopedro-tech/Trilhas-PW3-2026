const mysql = require("mysql2");

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "senha123",
   database: "ecommerce"
})
exports.findByEmail = (email, callback) => {
   const sql = "SELECT * FROM users WHERE email = ?"
   db.query(sql, [email], (err, result) => {
       if(err) throw err
       callback(result[0])
   })
}

