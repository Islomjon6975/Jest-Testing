import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import { Counter } from './components/counter/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Todo /> */}
      <Counter />
    </BrowserRouter>
  </React.StrictMode>
);

