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

function deleteList(req, res) {
  List.findByIdAndDelete(req.params.id)
  .then(list => {
    res.redirect("/lists")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/lists")
  })
}

function edit(req, res) {
  List.findById(req.params.id)
  .then(list => {
    res.render("lists/edit", {
      title: "Edit list",
      list
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res) {
  List.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(list => {
    res.redirect(`/lists/${list._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createGrocery(req, res) {
  List.findById(req.params.id)
  .then(list => {
    list.groceries.push(req.body)
    list.save()
    .then(() => {
      res.redirect(`/lists/${list._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newList as new,
  create,
  show,
  deleteList as delete,
  edit,
  update,
  createGrocery
}