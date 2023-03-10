import mongoose from "mongoose";

const Schema = mongoose.Schema

const grocerySchema = new Schema({
  content: String,
  quantity: {
    type: String,
    match: /[1-99]\d?/,
    min: 1
  },
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const listSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  groceries: [grocerySchema]
})

const List = mongoose.model('List', listSchema)

export {
  List
}