const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const NotesList = require('./notes-list')
const NoteForm = require('./note-form')


// rending to DOM with ReactDOM //
const reRender = function() {
  const state = store.getState()
  const $NotesList = <NotesList notes={state.notes}noteInput={state.noteInput}/> 
  const $app = document.querySelector('#list')

  ReactDOM.render($NotesList, $app)
}
reRender()
store.subscribe(reRender)
