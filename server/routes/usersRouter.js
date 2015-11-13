var express = require('express');
var router = express.Router();

// This wont be here eventually
// Get all users (for testing)
router.get('/', function (req, res) {
  if (process.env.NODE_ENV === 'production') { // Just in case we accidentally forget to remove this handler
    return;
  }
  res.json({'success':true});
});

// Creates new user
router.post('/signup', function (req, res) {
  // TODO : create a new user and sign them in
  res.json({'success':true});
});

// Authenticates a user
router.post('/signin', function (req, res) {
  // TODO : Authenticate user and create a session
  res.json({'success':true});
});

// Get user info by id
router.get('/:id', function (req, res) {
  res.json({'success':true});
});

// Update user info by id
router.put('/:id', function (req, res) {
  res.json({'success':true});
});

// Get all projects for a user
router.get('/:id/projects', function (req, res) {
  res.json({'success':true});
});

// Get all collaborations for a user
router.get('/:id/collaborations', function (req, res) {
  res.json({'success':true});
});

// Get all recordings for a user
router.get('/:id/recordings', function (req, res) {
  res.json({'success':true});
});

// Get all lyrics for a user
router.get('/:id/lyrics', function (req, res) {
  res.json({'success':true});
});

module.exports = router;
