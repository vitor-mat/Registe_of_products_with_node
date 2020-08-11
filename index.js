const express = require("express")
const app =  express()
const bodyParser = require("body-parser")
const Post = require("./model/Posts")
const handlebars = require("express-handlebars")

const test = require("./views/script/script")

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/add", (req, res) => {
    Post.create({
        name: req.body.name,
        price: req.body.price
    }).then(res.redirect("/"))
})

app.get('/list', (req, res) => {
    Post.findAll().then((produtos) => {
        res.render("list", {produtos: produtos})
    })
})

app.get('/delete/:id', (req, res) => {
    Post.destroy({where: {"id": req.params.id}}).then(()=> {
        res.redirect("/list")
    })
})

app.get('/edit/:id', (req, res) => {
    Post.findOne({where: {"id": req.params.id}}).then((oneProductor) => {
        res.render("edit", {oneProductor: oneProductor})
    })
})

app.listen("3333", () => console.log("serve on"))