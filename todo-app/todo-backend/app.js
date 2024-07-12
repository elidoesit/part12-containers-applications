const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const statisticsRouter = require('./redis/statistics'); 

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/api/todos', todosRouter);
app.use('/api', statisticsRouter); 

module.exports = app;
