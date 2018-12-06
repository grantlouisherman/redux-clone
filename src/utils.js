import faker from 'faker';
import { renderApp } from './index';
export const onAddNote = () => {
  const id = window.state.nextNoteId;
  window.state.notes[id] = {
    id,
    content:faker.lorem.sentence()
  }
  window.state.nextNoteId++;
  renderApp();
}
