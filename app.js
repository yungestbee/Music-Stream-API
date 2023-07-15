const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const routes = require('./routes/streamRoutes')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')


const app = express();
const xss = require('xss-clean');

app.use(cookieParser())

app.use(express.json());
app.use(xss())
app.use(helmet())

const uri = process.env.uri;
const port = process.env.PORT;

app.listen(port, ()=>{ 
    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("mongo connected")
}).catch((error) => {
    console.log(error.message)
    console.log(error)
})
console.log(`Server listening on port ${port}`)
})

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(app.listen(port, ()=>{console.log(`server listening on port ${port}`)}))
//   .then(console.log("mongo connected"))
//   .catch((error)=>{
//     console.log(error)
//   });

app.use(routes)
