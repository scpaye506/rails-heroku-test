import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { request } from './services/api';

class App extends Component {
  state = {
    todos: []
  };

  componentWillMount() {
    request('/api/todos').then(data => {
      this.setState({ todos: data });
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <br />
            {this.state.todos.map(todo => (
              <span key='todo.id'>
                {todo.title} - {todo.order}
              </span>
            ))}
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
