import mongoose, { Schema } from 'mongoose';
import ITodo from '../interface/todo'

const todoSchema: Schema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ITodo>('Todo', todoSchema);
