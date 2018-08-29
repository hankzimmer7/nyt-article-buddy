const mongoose = require("mongoose");
const db = require("../server/database/models");

// This file empties the Articles collection and inserts the articles below

const url = process.env.MONGODB_URI ||
"mongodb://localhost/nytreact"

mongoose.connect(url, {useNewUrlParser: true});

const articleSeed = [{
    "title": "With Ships and Missiles, China Is Ready to Challenge U.S. Navy in Pacific",
    "date": "2018-08-29T00:00:00Z",
    "url": "https://www.nytimes.com/2018/08/29/world/asia/china-navy-aircraft-carrier-pacific.html?action=click&module=Top%20Stories&pgtype=Homepage"
}];

db.Article
    .deleteMany({})
    .then(() => db.Article.collection.insertMany(articleSeed))
    .then(data => {
        console.log(data.result.n + " article records inserted!");
        articleSeedingDone = true;
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });