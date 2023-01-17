import { List } from "../models/list.js";

function index(req, res) {
  List.find({})
  .then(lists => {
    res.render('lists/index', {
      lists,
      title: "All Lists"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function newList(req, res) {
  res.render("lists/new", {
    title: "Add List",
  })
}

export {
  index,
  newList as new
}