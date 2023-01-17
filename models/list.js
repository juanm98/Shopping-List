import mongoose from "mongoose";

const Schema = mongoose.Schema

const listSchema = new Schema({
  grocery: String,
  checkbox: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const List = mongoose.model('List', listSchema)

export {
  List
}