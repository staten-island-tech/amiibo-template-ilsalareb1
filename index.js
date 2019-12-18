const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views");
//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath); //telling express to get templates from templates/views folder
hbs.registerPartials(partialPath);
app.get(" ", async (req, res) => {
try {
res.render("index", {
    title: "Our first Express App"
});
} catch {
res.status(500).send();
}
});

app.get("/about/:id", async (req, res) => {
    const 
    try {
    res.render("index", {
        title: `${name}`
    });
    } catch {
    res.status(500).send();
    }
});

app.get("/swag", async (req, res) => {
    try {
    res.render("swag");
    } catch {
    res.status(500).send();
    }
});