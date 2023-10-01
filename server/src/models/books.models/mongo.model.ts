import { Schema, model } from "mongoose";

export const MongoBookSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  poster_url: {
    type: String,
    required: true,
  },
});

export const MongoBooksModel = model("Book", MongoBookSchema);
