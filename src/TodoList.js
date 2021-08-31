import React, { Component } from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {addTodo, removeTodo, getTodos} from './actionCreator';
import {Route} from 'react-router-dom';
import TodoForms from './TodoForms';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    componentDidMount(){
        this.props.getTodos();
    }

    handleAddTodo(val){
        this.props.addTodo(val);
    }

    removeTask(id){
        this.props.removeTodo(id);
    }
    
    render() {
        let todos = this.props.todos.map(val=>(
            <Todo onRemove={this.removeTask.bind(this, val._id)} task={val.task} key={val._id} />
        ))
        return (
            <div>
               <Route path="/todos/new" component={props =>(
                   <TodoForms {...props} handleSubmit={this.handleAddTodo}/>
               )}/>
               <Route exact path="/todos" component={()=><ul>{todos}</ul>}/>
                
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps, {addTodo, removeTodo, getTodos})(TodoList)
