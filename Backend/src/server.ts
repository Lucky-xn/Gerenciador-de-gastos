import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api', routes());

app.listen(3030, () => {
  console.log(`servidor iniciado na porta localhost:3030`)
})