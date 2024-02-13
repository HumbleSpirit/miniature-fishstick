// Create web server
const express = require('express');
const app = express();
// Create database
const comments = require('./comments.json');

// Create GET route that returns list of comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create GET route that returns a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  res.json(comment);
});

// Create POST route that adds a new comment
app.use(express.json());
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    body: req.body.body
  };
  comments.push(comment);
  res.json(comment);
});

// Create PUT route that updates a comment
app.put('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  comment.body = req.body.body;
  res.json(comment);
});

// Create DELETE route that deletes a comment
app.delete('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.json(comment);
});

// Listen on port 3000
app.listen(3000);