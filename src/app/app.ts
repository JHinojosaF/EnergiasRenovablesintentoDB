const express = require('express')
const app = express()
const port = 3316
const path = require('path')


const mysql=require("mysql");
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'qwertyA1',
    port:3306,
    database : 'webdb'
  });
  connection.connect(function(err:any) {
    if (err) {
      console.error('Error conectando a la DB ' + err.stack);
      return;
    }
   

    connection.query('SELECT * FROM usuarios', (err:any,rows:any) => {
      if(err) throw err;
    
      console.log('Data received from Db:');
      console.log(rows);
    });

    console.log('Conexión establecida' + connection.threadId);
  });

  app.use (express.static(path.join(__dirname,'/energias-renovables')));
  
  app.get('/', (req:any, res:any)=>{
    res.send('me quiero puro morirme shushetu');

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 