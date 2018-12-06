import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './Notes';
import { reducer } from './rootReducer';

const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

class App extends Component {
  render() {
    const state0 = reducer(undefined, {
      type: CREATE_NOTE
    });

    const state01 = reducer(state0, {
      type: UPDATE_NOTE,
      id: 1,
      content: 'Hello, world!'
    });
    return (
      <div className="App">
        <Notes notes={state01} />
      </div>
    );
  }
}

export default App;
