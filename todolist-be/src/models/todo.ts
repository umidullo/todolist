import mongoose, { Schema } from 'mongoose';
import ITodo from '../interface/todo'

const todoSchema: Schema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model<ITodo>('Todo', todoSchema);
