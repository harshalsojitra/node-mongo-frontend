const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Connect to MongoDB (replace 'yourMongoDBUri' with your actual MongoDB URI)
mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Use Express built-in middleware for parsing JSON and urlencoded data
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Define a simple route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Listen on a port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listeningon port ${port}...`);
});

app.use(express.static('public'));