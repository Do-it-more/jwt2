const express = require('express');
const { verifyToken, checkRole } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/super-mentor-dashboard', verifyToken, checkRole(['super-mentor']), (req, res) => {
  res.status(200).json({ message: 'Welcome to the Super Mentor Dashboard!' });
});

router.get('/mentor-dashboard', verifyToken, checkRole(['mentor', 'super-mentor']), (req, res) => {
  res.status(200).json({ message: 'Welcome to the Mentor Dashboard!' });
});

router.get('/user-dashboard', verifyToken, checkRole(['user', 'mentor', 'super-mentor']), (req, res) => {
  res.status(200).json({ message: 'Welcome to the User Dashboard!' });
});

module.exports = router;
