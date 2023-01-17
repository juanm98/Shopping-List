import { List } from "../models/list.js";

function index(req, res) {
  List.find({})
  .then(lists => {
    res.render('lists/index', {
      lists,
      title: "📃"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}