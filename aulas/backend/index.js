const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-58x2s.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.get('');

app.listen(3333);
