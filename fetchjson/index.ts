import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interface -> used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // test the request
  console.log(response);
  console.log(response.data);

  // pull of a direct reference to the todo
  const todo = response.data as Todo;
  // const todo: Todo = response.data;

  // extract the id, title and completed
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // the goal of TS is to help us catch errors during development and not at runtime
  logToDo(id, title, completed);

  // print the 'report'
  console.log(`
    the todo with Id: ${id},
    has a Title of: ${title},
    is is finished? ${completed}
  `);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
    the todo with Id: ${id},
    has a Title of: ${title},
    is is finished? ${completed}
  `);
};
