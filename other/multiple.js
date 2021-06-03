const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const colors = require("colors");
require("dotenv").config({
  path: path.join(__dirname, "../config/.env"),
});

const mongoose = require("mongoose");
const url = process.env.MONGODB_URL || "mongodb://localhost/mevn-project";
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);

const categories = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data.json"), "utf-8")
);
const categoryModel = require("../models/category");

const addDatas = async () => {
  try {
    await categoryModel.insertMany(categories);
    console.log("data imported".green.bold);
    process.exit();
  } catch (er) {
    console.log(er);
    process.exit();
  }
};
const deleteMany = async () => {
  try {
    await categoryModel.deleteMany({});
    console.log("datas removed".red.bold);
    process.exit();
  } catch (e) {
    console.log(e);
  }
};

switch (process.argv[2]) {
  case "-add":
    addDatas();
    break;
  case "-dd":
    deleteMany();
    break;
  default:
    console.log(`-add\t add Datas\n -dd\t delete Data`);
    process.exit();
}
