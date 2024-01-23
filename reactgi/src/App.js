// App.js
import React from 'react';
import CounterApp from './CounterApp';
import MovieSearchApp from './MovieSearchApp';
import TodoApp from './TodoApp';

const App = () => {
  return (
    <div>
      <CounterApp />
      <h2>Movie</h2>
      <MovieSearchApp />
      <h2>To Do</h2>
      <TodoApp />
    </div>
  );
};

export default App;
