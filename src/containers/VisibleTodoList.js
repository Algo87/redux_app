import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

function VisibleTodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => getVisibleTodos(state.todos, state.visibilityFilter))
  return <TodoList onTodoClick={(id) => dispatch(toggleTodo(id))} todos={todos}/>
}

export default VisibleTodoList


