import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

import Todo from './models/todo';

const PORT = process.env.PORT || 3001

const app: Application = express();

// const db = process.env.DB_CONNECTION;
const db = 'mongodb+srv://umidullo:fake_password@cluster0.76egr.mongodb.net/todolist?retryWrites=true&w=majority'

if (db) {
  mongoose
    .connect(db)
    .then((res) => console.log('connected to db'))
    .catch((err: Error) => console.log(err));
} else {
  console.log('db is undefined');
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.get('/', (req: Request, res: Response) => {
  res.send(`to see TODO items go http://localhost:${PORT}/todos/`);
});

app.get('/todos', async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as any) || 1;
    const limit = parseInt(req.query.limit as any) || 10;
    const todos = await Todo.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.status(200).json({ todos });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post('/todos', async (req: Request, res: Response) => {
  const { message, completed } = req.body;
  const todo = new Todo({ message, completed });
  try {
    const result = await todo.save();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get('/todos/:id', async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

app.delete('/todos/:id', async (req: Request, res: Response) => {
  try {
    const todo = await Todo.remove({ _id: req.params.id });
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.patch('/todos/:id', async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(
      { _id: req.params.id }
    );
    Object.assign(todo, req.body)
    todo?.save()
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// app.listen(process.env.PORT, (): void => console.log('server running'));
app.listen(PORT, (): void => console.log('server running'));
