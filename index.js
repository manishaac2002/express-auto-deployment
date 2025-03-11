import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const application = express();
application.use(express.json());

const port = process.env.PORT || 4000;

application.get('/test', function (req, res) {
  res.send('Hello World');
});

application.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});