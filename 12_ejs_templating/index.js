const express = require("express");
const path = require("path");
const redditData = require("./data.json");

// start server
const app = express();

// set assets folder
app.use(express.static(path.join(__dirname, "/assets")));

// set view engine and folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// make object with name and link ob subreddits
const subredditNames = {};
for (let i in redditData) {
    subredditNames[redditData[i].name] = i;
}

// home
app.get("/", (req, res) => {
    res.render("home", { "name": "Home", "subreddits": subredditNames });
})

// subreddit
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    if (subreddit in redditData) {
        const subredditData = redditData[subreddit];
        res.render("subreddit", { ...subredditData, ...{ "subreddits": subredditNames } })
    }
    else {
        res.render('subredditnotfound', { subreddit, ...{ "name": "Subreddit Not Found", "subreddits": subredditNames } })
    }

})

// everything else
app.get("*", (req, res) => {
    res.render('notfound', { "name": "Not Found", "subreddits": subredditNames })
})


app.listen(4000, () => { console.log("Listening") })