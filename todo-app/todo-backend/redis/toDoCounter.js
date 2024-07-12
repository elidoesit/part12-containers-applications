const { getAsync, setAsync } = require('./index'); 

async function incrementTodoCounter() {
  try {
    let currentCount = await getAsync('todo_counter');
    if (!currentCount) {
      currentCount = 0;
    }
    const newCount = parseInt(currentCount, 10) + 1;
    await setAsync('todo_counter', newCount);
    return newCount;
  } catch (error) {
    console.error('Error incrementing todo counter:', error);
    throw error;
  }
}

async function getTodoCounter() {
  try {
    const count = await getAsync('todo_counter');
    return parseInt(count, 10) || 0;
  } catch (error) {
    console.error('Error fetching todo counter:', error);
    throw error;
  }
}

module.exports = {
  incrementTodoCounter,
  getTodoCounter,
};