const mysql = require('mysql2')
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "08031967",
    database: "ThietBiPhongHoc"
})

module.exports = con