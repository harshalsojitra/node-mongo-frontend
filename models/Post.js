const mongoose = require('mongoose');

// Create a Schema for Blog Posts
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // This means a title is required
    trim: true // Trims whitespace from the title
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically sets to current date and time
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Model from the Schema
const Post = mongoose.model('Post', postSchema);

// Export the model
module.exports = Post;