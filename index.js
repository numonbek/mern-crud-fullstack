import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './router.js';

const PORT = process.env.APP_PORT || 5000;
const IP = process.env.APP_IP || null;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* api */
app.use('/api', router);

async function startApp() {
  try {
    app.listen(PORT, IP);
  } catch (e) {
    console.log(e);
  }
}

startApp();
