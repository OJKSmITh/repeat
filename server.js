const express = require("express")
const nunjucks = require('nunjucks')
const app = express()

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app
})

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))

const list = [{ name: "테스트", subject: "테스트", content: "테스트" }]

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

app.post('/write', (req, res) => {
    const { subject, name, content } = req.body
    list.push({ subject, content, name })
    res.redirect(`/view?index=${list.length - 1}`)
})

app.get('/view', (req, res) => {
    const { index } = req.query
    res.render('view.html', { name: list[index].name, content: list[index].content, subject: list[index].subject })
})

app.listen(3000, (req, res) => {
    console.log("hi")
})