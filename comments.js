// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the comments API');
});
app.get('/comments', (req, res) => {
  res.json([
    { id: 1, text: 'This is the first comment' },
    { id: 2, text: 'This is the second comment' },
  ]);
});
app.post('/comments', (req, res) => {
  const newComment = req.body;
  // Here you would typically save the comment to a database
  res.status(201).json({ message: 'Comment added', comment: newComment });
});
app.delete('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  // Here you would typically delete the comment from a database
  res.json({ message: `Comment with id ${commentId} deleted` });
});
app.put('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  const updatedComment = req.body;
  // Here you would typically update the comment in a database
  res.json({ message: `Comment with id ${commentId} updated`, comment: updatedComment });
});
// Start server
app.listen(port, () => {
  console.log(`Comments API running at http://localhost:${port}`);
});
// Export the app for testing purposes
module.exports = app;


