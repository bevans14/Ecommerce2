const express = require('express');
const cors = require('cors'); // cors for handling Cross-Origin Resource Sharing
const mysql2 = require("mysql2");

const app = express();
app.use(cors());

// i needed a server to connect my database to
// installed express to do so


// connecting to database, all info must match


const db = mysql2.createConnection({
  host: "localhost",
  database: "MeowMatchmaker1",
  user: "root",
  password: "password",
  
});


app.get('/', (req, res) => {
    return res.json("from backend side");
});

app.get('/users',(req,res)=> {
    const sql = "SELECT * from cats"; // since i wanted to use all my data
    db.query(sql, (error, data) => {
        if (error) return res.json(error);
        return res.json(data);
})
})

app.listen(4001, () => {
    console.log("listening");
});
