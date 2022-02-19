import React from 'react';
import ReactDOM from 'react-dom';


const TodoTitle = () => {
  return (
    <div>
      <h1>Todo</h1>
    </div>
  )
}

const TodoSearch = () => {
  return (
    <div>
      <input type='text' placeholder='search string'/>
    </div>
  )
}

const TodoCounter = () => {
  return (
    <div>
      <p>todo: 2</p>
      <p>done: 1</p>
    </div>
  )
}

const TodoList = ({todos}) => {
const content = todos.map(item => {
    return <li key={item.id}><TodoListItem lable={item.lable}/></li>
  })

  return (
    <div>
     <ul>
       {content}
     </ul>
    </div>
  )
}

const TodoListItem = ({lable}) => {
  return (
    <span>{lable}</span>
  )
}

const App = () => {
  const todos = [
    {id: 1, lable: 'drink coffee', important: false, done: false},
    {id: 2, lable: 'drink tea', important: false, done: false},
    {id: 3, lable: 'drink vodka', important: false, done: false},
  ]
  return (
    <div>
      <TodoTitle/>
      <TodoSearch/>
      <TodoCounter/>
      <TodoList todos={todos}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);