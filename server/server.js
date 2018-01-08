const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  todo.save().then((todoDoc) => {
    res.send(todoDoc);
  }, (todoError) => {
    res.status(400).send(todoError);
  });
});

app.listen(3005, () => {
  console.log('Started on port :3000');
});

// const newTodo = new Todo({
//   text: 'Complete day 4 in #100DaysOfCode',
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo:', e);
// });

// const newUser = new User({
//   email: 'post@tonyand.re',
// });

// newUser.save().then((userDoc) => {
//   console.log('User saved', userDoc);
// }, (userError) => {
//   console.log('Unable to save user:', userError);
// });
