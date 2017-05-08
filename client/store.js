// Redux Store //
const Redux = require('redux')

// notes reducer//
function notes(state= ['Make sure to Catch a Promise', 'Unlinked files are lost files!', 'Map returns a NEW array'] , action) {
  switch(action.type) {
    case 'NOTE_CREATED':
      return state.concat(action.text)
    default:
      return state
  }
}

// noteInput reducer //
function noteInput(state = '', action) {
  switch(action.type) {
    case 'INPUT_CHANGED':
      return action.text
    case 'NOTE_CREATED':
      return ''
    default:
      return state
  }
}
// reducers combined //
const reducer = Redux.combineReducers({
  notes: notes,
  noteInput: noteInput
})

const store = Redux.createStore(reducer)

module.exports = store
