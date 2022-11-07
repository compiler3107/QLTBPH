const express  = require('express')
const app  = express()
const cors = require('cors')
const Router = require('./src/routers/index.js')
const con = require('./src/config/index.js')
const bodyParser = require('body-parser')
const PORT = 5000
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

con.connect(function(err){
    if(err) throw err;
    console.log("Connected database!")
})

app.use("/",Router)

app.listen(PORT,function(){
    console.log(`Node server running http://localhost:${PORT}`);
});

