const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const bookSeed = [
{
    title : "New Dark Knight",
    reporter : "Me",
    summary : "Testing new issues",
    component : "1",
    subcomponent : "2",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #1",
    reporter : "Mike",
    summary : "Testing more issues creation",
    component : "1",
    subcomponent : "2",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Rush Hour",
    reporter : "Jackie Chan",
    summary : "Testing",
    component : "2",
    subcomponent : "TBD",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
}

];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
