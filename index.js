const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('index');
});

app.get("/lemon", (req, res) => {
    res.status(301).redirect("https://discord.gg/j4cZTzxR4M")
})

app.get("/nova", (req, res) => {
    res.status(301).redirect("https://discord.gg/DTxNMhcyCg")
})

app.get("/discord", (req, res) => {
    res.status(301).redirect("https://discord.gg/groszus")
})

app.use('/', router);
app.listen(3000);

console.log('running at port 3000');
