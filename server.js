import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import Tomato from './models/tomatoModel.js';
import cors from 'cors';
import path from 'path';

dotenv.config({ path: './.env' });

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is on...');
});

app.get('/all', async (req, res) => {
  try {
    const allTomatoes = await Tomato.find();
    res.status(201).json(allTomatoes);
  } catch (error) {
    console.log(error);
  }
});

app.post('/addtomato', async (req, res) => {
  const { send } = req.body;
  const one = await Tomato.create(send);

  if (one) {
    res.status(201).json({ message: 'Created' });
  } else {
    res.status(400);
    throw new Error('Not created');
  }
});

app.delete('/deletetomato', async (req, res) => {
  const { id } = req.body;
  const one = await Tomato.findByIdAndRemove(id);

  if (one) {
    res.status(201).json({ message: 'Deleted' });
  } else {
    res.status(400);
    throw new Error('Not deleted');
  }
});

app.put('/edittomato', async (req, res) => {
  const { id, send } = req.body;
  const one = await Tomato.findByIdAndUpdate(id, send);
  if (one) {
    res.status(201).json({ message: 'Edited' });
  } else {
    res.status(400);
    throw new Error('Not Edited');
  }
});

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
if (process.env.NODE_ENV == 'production') {
  // 要使用static build
  app.use(express.static('client/build'));
  // 任意route, 都send index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(
  PORT,
  console.log(
    `Server running -- ${process.env.NODE_ENV} -- ${PORT}`.yellow.bold
  )
);
