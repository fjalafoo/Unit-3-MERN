const express = require('express')

const cors=require('cors')
//Initializing our application
const app = express()

require('dotenv').config()
require('./config/database')


//Mount our middleware



// ...
// app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
// ...
app.use('/',require('./routes/users'))
app.use('/',require('./routes/tweets'))

//Listening on a port
app.listen(4000, ()=>{
    console.log('App listening on port 4000!')
})
