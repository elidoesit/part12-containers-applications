const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const { incrementTodoCounter } = require('../redis/toDoCounter'); // Adjust path as per your setup

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      text: req.body.text,
      done: false,
    });

    // Increment todo counter
    await incrementTodoCounter();

    res.status(201).send(todo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).send('Failed to create todo');
  }
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/todos/id', async (req, res) => {
  res.send(req.todo); // Send the found todo
});

/* PUT todo. */
singleRouter.put('/todos/:id', async (req, res) => {
  try {
    const { todo } = req;
    todo.text = req.body.text; // Update todo text
    todo.done = req.body.done; // Update todo done status
    await todo.save(); // Save the updated todo
    res.send(todo); // Respond with the updated todo
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
