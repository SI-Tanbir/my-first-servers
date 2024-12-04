const express = require('express')
const phone =require('./phoneData.json')
var cors = require('cors')

const app = express()
app.use(cors())
const port = 3000


app.get('/phone',(req,res)=>{
    res.send(phone)
})

app.get('/phone/:id',(req,res)=>{
    
    const id=parseInt(req.params.id);

    console.log("i need data for id:",id);
    const search= phone.find(f=>f.id === id) || {}
    res.send(search)
})

app.get('/', (req, res) => {
  res.send('i am the api boos')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})