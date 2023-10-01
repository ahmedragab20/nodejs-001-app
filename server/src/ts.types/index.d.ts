import { ObjectId } from "mongoose";

export interface IBook {
  _id?: any;
  title: string;
  release_date: string;
  rate: number;
  poster_url: string;
  author: string;
}