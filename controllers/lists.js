import { List } from "../models/list.js";

function index(req, res) {
  List.find({})
  .then(lists => {
    res.render("lists/index", {
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

function create(req, res) {
  List.create(req.body)
  .then(list => {
    res.redirect("/lists")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/lists/new")
  })
}

function show(req, res) {
  List.findById(req.params.id)
  .then(list => {
    res.render("lists/show", { 
      title: "Add groceries", 
      list: list,
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index,
  newList as new,
  create,
  show
}