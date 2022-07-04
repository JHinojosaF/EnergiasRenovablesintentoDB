const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwertyA1",
  port:3306,
  database: "webdb"
});
/* GET users listing. */

router.post('/login', async function (req, res, next) {
  try {
    let { nombreUsuario, pswrd } = req.body; 
   
    const hashed_pswrd = md5(password.toString())
    const sql = `SELECT * FROM usuarios WHERE nombre = ? AND pswrd = ?`
    con.query(
      sql, [nombreUsuario, hashed_pswrd],
    function(err, result, fields){
      if(err){
        res.send({ status: 0, data: err });
      }else{
        let token = jwt.sign({ data: result }, 'secret')
        res.send({ status: 1, data: result, token: token });
      }
     
    })
  } catch (error) {
    res.send({ status: 0, error: error });
  }
});
module.exports = router;