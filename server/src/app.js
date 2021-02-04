const express = require('express');

const app = express();

// const mainRouter = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/', mainRouter);
app.use('/random', (req, res, next) => {
  const random = Math.random();

  let message = '';

  if (random > 0) {
    message = 'numero muy grande';
  } else {
    message = 'numero pequeño';
  }

  res.status(200).json({ data: { random, message } });
});

app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.code = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res
    .status(err.code || 500)
    .json({ message: err.message || 'Internal server error' });
});

app.listen(3000, () => {
  console.log('Server started!');
});
