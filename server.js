const express = require("express")
const nunjucks = require('nunjucks')
const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app
})

app.use(express.static("public"))

app.get('/', (req, res) => {
    const { name } = req.query
    res.render("index.html", { name })
})

app.get('/list', (req, res) => {
    res.render("list.html")
})

app.get('/write', (req, res) => {
    res.render("write.html")
})

app.get('/view', (req, res) => {
    res.render('view.html')
})

app.listen(3000, (req, res) => {
    console.log("hi")
})