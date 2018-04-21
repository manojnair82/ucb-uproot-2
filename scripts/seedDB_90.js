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
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #2",
    reporter : "Mike",
    summary : "Testing more issues creation",
    component : ["3", "5", "6", "11", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #3",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["13", "14", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #4",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["6", "7", "11", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #5",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "6", "12", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #6",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #7",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "3", "6", "12"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #8",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3", "6", "10", "12", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #9",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #10",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["5", "6", "7", "8"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #11",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["6", "7", "11", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #12",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3", "5", "6", "11", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #13",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "4", "6", "8", "10","12", "14"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #14",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["13", "14", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #15",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["10", "11", "12"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #16",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1",  "5", "10", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #17",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #18",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "6", "12", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #19",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "3", "6", "12"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #20",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3", "6", "10", "12", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #21",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["4", "7", "11", "14"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #22",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "HR",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #23",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "HR",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #24",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1",  "5", "10", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #25",
    reporter : "Me",
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
},
{
    title : "Issue #41",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["4", "7", "11", "14"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #42",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "5", "10", "14"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #43",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3", "5", "6", "11", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #44",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #45",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "4", "6", "8", "10","12", "14"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #46",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "2", "8", "13", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #47",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["6", "7", "11", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #48",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "10", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #49",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #50",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["6", "12", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #51",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "3", "10", "11", "12"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #52",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "6", "12", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #53",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "2", "8", "13", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #54",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["10", "11", "12"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #55",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["11", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #56",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["4", "7", "11", "14"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #57",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1",  "5", "10", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #58",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #59",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "4", "6", "8", "10","12", "14"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #60",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "3", "6", "12"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #61",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #62",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #63",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3", "6", "10", "12", "15"],
    subcomponent : "FIN",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #64",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #65",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #66",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2"],
    subcomponent : "FIN",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #67",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3"],
    subcomponent : "ACT",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #68",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["4"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #69",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["5"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #70",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3", "5", "6", "11", "15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #71",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #72",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["6"],
    subcomponent : "ACT",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #73",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["7"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #74",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["8"],
    subcomponent : "ACT",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #75",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["6", "7", "11", "15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #76",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["10"],
    subcomponent : "ACT",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #77",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["10"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #78",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["10"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #79",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["11", "12"],
    subcomponent : "ACT",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #80",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["13", "14", "15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #81",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["2", "6", "12", "15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},

{
    title : "Issue #82",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3", "5", "6", "11", "15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #83",
    reporter : "Me",
    summary : "Testing new issues",
    component : [ "13"],
    subcomponent : "ACT",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #84",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "2", "3"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #85",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["14"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #86",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #87",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "bug",
    date: new Date(Date.now())
},
{
    title : "Issue #88",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["3", "6", "10", "12", "15"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #89",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["1", "3", "6", "12"],
    subcomponent : "ACT",
    severity : "",
    issueType : "enhancement",
    date: new Date(Date.now())
},
{
    title : "Issue #90",
    reporter : "Me",
    summary : "Testing new issues",
    component : ["13", "14", "15"],
    subcomponent : "ACT",
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
