import mongoose from "mongoose";

const Schema = mongoose.Schema

// const contentSchema = new Schema({
//   content: String,
//   quantity: { type: Number, min: 1, max: 10, default: 1 }
// })

const listSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // content: [contentSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const List = mongoose.model('List', listSchema)

export {
  List
}