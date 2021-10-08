import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config()

import Todo from './models/todo';

const app: Application = express();

const db =
  'mongodb+srv://umidullo:fake_password@cluster0.76egr.mongodb.net/todolist?retryWrites=true&w=majority';

// const db = process.env.DB_CONNECTION;

mongoose
  .connect(db)
  .then((res) => console.log('connected to db'))
  .catch((err: Error) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.get('/', (req: Request, res: Response) => {
  res.send('hello World!');
});

app.get('/todos', async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.send({ todos });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post('/todos', async (req: Request, res: Response) => {
  const { text } = req.body;
  const todo = new Todo({ text });
  try {
    const result = await todo.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get('/todos/:id', async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.send({ todo });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.delete('/todos/:id', async (req: Request, res: Response) => {
  try {
    const todo = await Todo.remove({ _id: req.params.id });
    res.send({ todo });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.patch('/todos/:id', async (req: Request, res: Response) => {
  try {
    const todo = await Todo.updateOne(
      { _id: req.params.id },
      { $set: { text: req.body.text } }
    );
    res.send({ todo });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT, (): void => console.log('server running'));
