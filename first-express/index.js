const express = require("express");
const app = express();

// app.use((req, res) => {
//     // console.dir(req);
//     res.send(`<h1>Hello World!</h1>`);
//     // res.send({message : "Hello World!"});
// })

app.get("/", (req, res) => {
    res.send("This is homepage!");
})

app.get("/about", (req, res) => {
    res.send("This is about!");
})

app.post("/about", (req, res) => {
    res.send("This is about post!");
})

app.get("/contact", (req, res) => {
    res.send("This is contact!");
})


app.get("/blog/:category/:title/:author", (req, res) => {
    const {
        category,
        title,
        author
    } = req.params;
    res.send(`This is blog: ${category}, ${title}, ${author}`);
})

app.get("/search", (req, res) => {
    const {
        q
    } = req.query;
    
    if(!q) {
        res.send("Not Found!");
    }
    res.send(`This query is: ${q}`);
})

app.get("*", (req, res) => {
    res.send("Tidak ditemukan!");
})

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
})