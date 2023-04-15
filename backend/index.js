const express = require("express")
var cors = require('cors')
const path = require("path")
const app = express();
app.use(cors())
// Statics
app.use(express.static('static'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const indexRouter = require('./routes/index')

app.use(indexRouter.router)

app.listen(3000, function(){
  console.log("Starting app listening at "+this.address().port)
})