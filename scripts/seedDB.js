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
    title : "Issue #1",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #2",
    reporter : "Alyna",
    summary : "Testing more issues creation",
    component : ["3", "5", "6", "11", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #3",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["13", "14", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #4",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["6", "7", "11", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #5",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["2", "6", "12", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #6",
    reporter : "Alyna",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #7",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["1", "3", "6", "12"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #8",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["3", "6", "10", "12", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #9",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #10",
    reporter : "Alyna",
    summary : "Testing new issues",
    component : ["5", "6", "7", "8"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #11",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["6", "7", "11", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #12",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["3", "5", "6", "11", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #13",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["2", "4", "6", "8", "10","12", "14"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #14",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["13", "14", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #15",
    reporter : "Alyna",
    summary : "Testing new issues",
    component : ["10", "11", "12"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #16",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["1",  "5", "10", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #17",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #18",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["2", "6", "12", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #19",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["1", "3", "6", "12"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #20",
    reporter : "Alyna",
    summary : "Testing new issues",
    component : ["3", "6", "10", "12", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #21",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["4", "7", "11", "14"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #22",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #23",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #24",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["1",  "5", "10", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #25",
    reporter : "Alyna",
    summary : "Testing new issues",
    component : ["2", "6", "12", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #26",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["2", "4", "6", "8", "10","12", "14"],
    ubcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #27",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["6", "7", "11", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #28",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["10", "11", "12"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #29",
    reporter : "Alyna",
    summary : "Testing new issues",
    component : ["3", "5", "6", "11", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #30",
    reporter : "Win",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #31",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["1", "3", "6", "12"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #32",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #33",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["3", "6", "10", "12", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #34",
    reporter : "Alyna",
    summary : "Testing new issues",
    component : ["6", "12", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #35",
    reporter : "Manoj",
    summary : "Testing new issues",
    component : ["11"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #36",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["2", "3", "10", "11", "12"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #37",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #38",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["1",  "5", "10", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #39",
    reporter : "Alyna",
    summary : "Testing new issues",
    component : ["10", "11", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #40",
    reporter : "Veronica",
    summary : "Testing new issues",
    component : ["13", "14", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
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
