const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
})


app.get('/', (req, res) => {
    const { name } = req.query
    res.render("index.html", { name })
})

app.listen(3000, (req, res) => {
    console.log("hi")
})