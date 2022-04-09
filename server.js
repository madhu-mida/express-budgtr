const express = require("express")
const app = express();

const budget = require("./models/budget.js")
// const bodyParser = require("body-parser")
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get("/budgets", (req, res) => {
    console.log(budget)
    let className = "default"
    let sum = 0;
    budget.forEach((element) => {
        sum += element.amount;
    })
    if (sum < 0) {
        className = "red"
    } else if (sum > 1000) {
        className = "green"
    }
    res.render("index.ejs", { allBudget: budget, totalAccountbalance: sum, className: className })
})

app.get("/budgets/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", { eachBudget: budget[req.params.index] })
})

app.post("/budgets", (req, res) => {
    req.body.tags = (req.body.tags).split(",")
    req.body.amount = Number(req.body.amount)
    budget.push(req.body)
    res.redirect("/budgets")
})





app.listen("3000", () => {
    console.log("You are listening to Port:3000")
})