import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  userName: String,
  handle: String,
  time: String,
  image: String,
  title: String,
  topic: String,
  replies: Number,
  retuits: Number
}, {collection: 'tuits'});
export default schema;