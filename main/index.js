import express from 'express';
import flashCardsRouter from './controllers/FlashCardsRouter.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/flashCardsService', flashCardsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 