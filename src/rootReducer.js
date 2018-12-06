const initialState = {
  nextNoteId:1,
  notes:{}
};

const actionTable = {
  ["CREATE_NOTE"]: (state, action) => {
    const { content } = action;
    const { nextNoteId, notes } = state;
    let newNoteState = Object.assign({}, notes, { id:nextNoteId, content });
    return {
      ...state,
      ...newNoteState,
      nextNoteId:nextNoteId+1
    }

  },
  ["UPDATE_NOTE"]: (state, action) => {
    const {id, content} = action;
    const editedNote = {
      ...state.notes[id],
      content
    };
   return {
     ...state,
     notes: {
       ...state.notes,
       [id]: editedNote
     }
   };
  }
}

export const reducer = (state=initialState, action) => {
  if(actionTable[action.type] ){
    return actionTable[action.type](state, action)
  }
  return state;
}
