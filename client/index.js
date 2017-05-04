const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const NotesList = require('./notes-list')


// rending to DOM with ReactDOM //
const state = store.getState()
const list = React.createElement(NotesList, state )
const $app = document.querySelector('#list')

ReactDOM.render(list, $app)
