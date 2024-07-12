const express = require('express');
const { getTodoCounter } = require('./toDoCounter'); 
const router = express.Router();

/* GET statistics. */
router.get('/statistics', async (_, res) => {
  try {
    const addedTodos = await getTodoCounter();
    res.json({ added_todos: addedTodos });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

module.exports = router;