const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api/people', peopleRouter);

app.post('/login', (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send('Please provide credentials');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
