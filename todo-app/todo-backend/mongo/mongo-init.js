db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('todos');

const todo1 = { text: 'Write code', done: true };
db.todos.insert(todo1);
console.log(todo1);

const todo2 = { text: 'Learn about containers', done: false };
db.todos.insert(todo2);
console.log(todo2);