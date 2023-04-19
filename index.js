const express = require('express');
const app = express();
const cors = require('cors')
const categories = require('./categories/categories.json');
const port = process.env.PORT || 5000

app.use(cors());
app.get('/',(req,res)=>{
    res.send('dragon news is running')
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})





app.listen(port,()=>{
    console.log(`dragon news is running on port ${port}`)
})