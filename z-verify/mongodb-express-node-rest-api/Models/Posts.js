import mongoose from "mongoose";

// set schema
const PostsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// export collection
export default mongoose.model("Posts", PostsSchema);
