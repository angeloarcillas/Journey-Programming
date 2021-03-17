import mongoose from "mongoose";

const card_schema = mongoose.Schema({
  name: String,
  image: String,
});


export default mongoose.model("cards", card_schema);