import { Document } from "mongoose";

export default interface ITodo extends Document {
  message: string,
  completed: boolean
}