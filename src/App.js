import React, { Component } from 'react'
import './App.css';
import TodoList from './TodoList';
import { Link, Route, Redirect } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>See Our To-do</h1>
        <p>
          <Link to="/todos">See to Todos</Link>
        </p>
        <p>
          <Link to="/todos/new">Add Todos</Link>
        </p>
        <Route path="/todos" component={TodoList}></Route>
        <Route exact path="/" render={()=><Redirect to="/todos" />}></Route>
      </div>
    )
  }
}
