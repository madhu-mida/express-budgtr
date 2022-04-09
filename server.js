const express = require("express")
const app = express();

const budget = require("./models/budget.js")


// app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get("/budgets", (req, res) => {
    console.log(budget)
    res.render("index.ejs", { allBudget: budget })
})

app.get("budgets/new", (req, res) => {
    app.render("new.ejs")
})

app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", { eachBudget: budget[req.params.index] })
})

app.post("/budgets", (req, res) => {
    app.send("Request Received")
})





app.listen("3000", () => {
    console.log("You are listening to Port:3000")
})