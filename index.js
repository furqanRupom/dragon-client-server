const express = require('express');
const app = express();
const cors = require('cors')
const categories = require('./categories/categories.json');
const news = require('./data/news.json')
const port = process.env.PORT || 5000

app.use(cors());
app.get('/',(req,res)=>{
    res.send('dragon news is running')
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})
app.get('/news',(req,res)=>{
    res.send(news)
})

app.get('/news/:Id',(req,res)=>{
    const id = req.params.Id
    // console.log(id)
    const specificNews = news.find(n => n._id === id);
    res.send(specificNews);
})


app.get('/categories/:id',(req,res)=>{
    const id = req.params.id
    if(id == 0){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n=> n.category_id === id)
        res.send(categoryNews)
    }
})




app.listen(port,()=>{
    console.log(`dragon news is running on port ${port}`)
})