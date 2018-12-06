import React, {Component} from 'react';
import { onAddNote } from './utils.js';

class Notes extends Component{
  render(){
    const notes = this.props.notes;
    console.log(notes)
    return(
      <div>
        <button className="editor-button" onClick={onAddNote}>Add Note</button>
      </div>
    )
  }
};

export default Notes;
