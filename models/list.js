import mongoose from "mongoose";

const Schema = mongoose.Schema

const listSchema = new Schema({
  name: String,
  checkbox: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const List = mongoose.model('List', listSchema)

export {
  List
}