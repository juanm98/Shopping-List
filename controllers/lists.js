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
  req.body.owner = req.user.profile._id
  List.create(req.body)
  .then(list => {
    res.redirect("/lists")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/lists")
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

// First converted the function to be an async function. That way I don't have to do a bunch of .then() and .catch() for everything.
async function deleteGrocery(req, res) {
  try {
  // Destruct the req.params and accessed the id and groceryId. These names need to match the params in the route.
  const {id, groceryId} = req.params

  // We need to look for the list and see if there's one that match the id we're getting from the params.
  const foundList = await List.findById(id).lean();
  
  // If we don't find the list, redirect to another page
  if(!foundList){
  return res.redirect("/");
  }
  // At this point in the code, we know we have a list, now we just need to remove the grocery based on the grocery id
  await List.findByIdAndUpdate(id, {$pull: {groceries: {_id: groceryId} }})
  
  // The grocery has been removed and we need to redirect now.
  return res.redirect(`/lists/${id}`)
  } catch (error) {
  console.log(error)
  return res.redirect("/");
  }
}

export {
  index,
  newList as new,
  create,
  show,
  deleteList as delete,
  edit,
  update,
  createGrocery,
  deleteGrocery
}