import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js';
import Content from './Content.js';
import Total from './Total.js';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
