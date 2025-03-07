import express from 'express';

const application = express();
application.use(express.json());

const port = 4000;

application.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
