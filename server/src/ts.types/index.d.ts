import { ObjectId } from "mongoose";

export interface IBook {
  uuid: string;
  title: string;
  release_date: string;
  rate: number;
  poster_url: string;
  author: string;
}